from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_talisman import Talisman
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import logging
from datetime import datetime
from functools import wraps
import json
import html
from email_validator import validate_email as validate_email_lib, EmailNotValidError
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Security: Configure CORS with restricted origins
allowed_origins = os.getenv('ALLOWED_ORIGINS', 'http://localhost:5173').split(',')
CORS(app, resources={
    r"/api/*": {
        "origins": allowed_origins,
        "methods": ["GET", "POST"],
        "allow_headers": ["Content-Type"],
        "max_age": 3600
    }
})

# Security: Add security headers
Talisman(app, 
    force_https=False,  # Set to True in production with HTTPS
    strict_transport_security=True,
    strict_transport_security_max_age=31536000,
    content_security_policy={
        'default-src': "'self'",
        'script-src': "'self'",
        'style-src': "'self' 'unsafe-inline'"
    },
    content_security_policy_nonce_in=['script-src']
)

# Security: Set max request size (16KB)
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024

# Security: Add rate limiting
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('email_service.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Email configuration
EMAIL_CONFIG = {
    'host': os.getenv('EMAIL_HOST', 'smtp.gmail.com'),
    'port': int(os.getenv('EMAIL_PORT', '587')),
    'use_tls': os.getenv('EMAIL_USE_TLS', 'True').lower() == 'true',
    'username': os.getenv('EMAIL_USERNAME', ''),
    'password': os.getenv('EMAIL_PASSWORD', ''),
    'from_email': os.getenv('EMAIL_FROM', ''),
    'to_emails': os.getenv('EMAIL_TO', '').split(',') if os.getenv('EMAIL_TO') else []
}

def validate_email(email):
    """Validate email format using industry-standard library"""
    try:
        valid = validate_email_lib(email, check_deliverability=False)
        return True
    except EmailNotValidError:
        return False

def redact_email(email):
    """Redact email for logging: user@domain.com -> u***@d*****.com"""
    try:
        parts = email.split('@')
        if len(parts) == 2:
            return f"{parts[0][0]}***@{parts[1][0]}*****{parts[1][-4:]}"
    except:
        pass
    return "***"

def validate_contact_form(data):
    """Comprehensive form validation"""
    errors = []
    
    # Check required fields
    required_fields = ['name', 'email', 'subject', 'message']
    for field in required_fields:
        if not data.get(field) or not str(data.get(field)).strip():
            errors.append(f'{field} is required')
    
    if errors:
        return errors
    
    # Length limits
    if len(data.get('name', '')) > 100:
        errors.append('Name too long (max 100 characters)')
    if len(data.get('subject', '')) > 200:
        errors.append('Subject too long (max 200 characters)')
    if len(data.get('message', '')) > 5000:
        errors.append('Message too long (max 5000 characters)')
    
    # Email validation
    if not validate_email(data.get('email', '')):
        errors.append('Invalid email format')
    
    # Prevent injection attempts
    dangerous_patterns = ['<script', 'javascript:', 'onerror=', 'onload=']
    for field in ['name', 'subject', 'message']:
        value = str(data.get(field, '')).lower()
        if any(pattern in value for pattern in dangerous_patterns):
            errors.append(f'Invalid content detected in {field}')
    
    return errors

def require_email_config(f):
    """Decorator to check if email is configured"""
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not all([EMAIL_CONFIG['username'], EMAIL_CONFIG['password'], EMAIL_CONFIG['from_email'], EMAIL_CONFIG['to_emails']]):
            return jsonify({
                'success': False,
                'message': 'Email service not configured'
            }), 500
        return f(*args, **kwargs)
    return decorated_function

def create_contact_email_template(data):
    """Create HTML email template for contact form submission - XSS SAFE"""
    # Sanitize all user inputs
    safe_data = {
        'name': html.escape(data['name']),
        'email': html.escape(data['email']),
        'subject': html.escape(data['subject']),
        'message': html.escape(data['message']).replace('\n', '<br>')
    }
    
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background-color: #0F52BA; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ padding: 30px; background-color: #f9f9f9; border-radius: 0 0 10px 10px; }}
            .field {{ margin-bottom: 20px; padding: 15px; background-color: white; border-radius: 5px; border-left: 4px solid #0F52BA; }}
            .label {{ font-weight: bold; color: #0F52BA; display: block; margin-bottom: 5px; }}
            .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
            .timestamp {{ color: #888; font-size: 12px; margin-top: 10px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>📧 New Contact Form Submission</h1>
                <p>SysDak Website - Customer Inquiry</p>
            </div>
            <div class="content">
                <div class="field">
                    <span class="label">👤 Name:</span>
                    <span>{safe_data['name']}</span>
                </div>
                <div class="field">
                    <span class="label">📧 Email:</span>
                    <span>{safe_data['email']}</span>
                </div>
                <div class="field">
                    <span class="label">📝 Subject:</span>
                    <span>{safe_data['subject']}</span>
                </div>
                <div class="field">
                    <span class="label">💬 Message:</span>
                    <p>{safe_data['message']}</p>
                </div>
                <div class="timestamp">
                    <strong>Submitted:</strong> {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the contact form on your website.</p>
                <p>SysDak - IT Solutions &amp; Services</p>
            </div>
        </div>
    </body>
    </html>
    """

def create_auto_reply_template(data):
    """Create HTML email template for auto-reply - XSS SAFE"""
    # Sanitize all user inputs
    safe_data = {
        'name': html.escape(data['name']),
        'email': html.escape(data['email']),
        'subject': html.escape(data['subject']),
        'message': html.escape(data['message']).replace('\n', '<br>')
    }
    
    return f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <title>Thank You for Contacting Us</title>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background-color: #0F52BA; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }}
            .content {{ padding: 30px; background-color: #f9f9f9; border-radius: 0 0 10px 10px; }}
            .message-box {{ background-color: white; padding: 20px; border-radius: 5px; border-left: 4px solid #0F52BA; margin: 20px 0; }}
            .contact-info {{ background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin-top: 20px; }}
            .footer {{ text-align: center; padding: 20px; color: #666; font-size: 12px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>🎉 Thank You for Contacting Us!</h1>
                <p>We've received your message</p>
            </div>
            <div class="content">
                <p>Dear {safe_data['name']},</p>
                <p>Thank you for reaching out to SysDak. We have received your message regarding <strong>"{safe_data['subject']}"</strong> and will get back to you as soon as possible.</p>

                <div class="message-box">
                    <h3>📋 Your Message:</h3>
                    <p><em>{safe_data['message']}</em></p>
                </div>

                <p>Our team typically responds within <strong>24-48 business hours</strong>. If you need immediate assistance, please don't hesitate to call us directly.</p>

                <div class="contact-info">
                    <h3>📞 Contact Information:</h3>
                    <p><strong>Phone:</strong> +91 8946060246</p>
                    <p><strong>Email:</strong> contact@sysdak.com</p>
                    <p><strong>Address:</strong> Plot no 48 Nirmun Layout A Samanapalli Road Sipcot 2 Hosur - 635109</p>
                </div>

                <p>Best regards,<br>
                <strong>The SysDak Team</strong></p>
            </div>
            <div class="footer">
                <p>SysDak - IT Solutions &amp; Services</p>
                <p>© 2024 All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    """

def send_email(to_emails, subject, html_content, text_content=None, reply_to=None):
    """Send email using SMTP"""
    try:
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = EMAIL_CONFIG['from_email']
        msg['To'] = ', '.join(to_emails) if isinstance(to_emails, list) else to_emails
        if reply_to:
            msg['Reply-To'] = reply_to

        # Add HTML content
        msg.attach(MIMEText(html_content, 'html'))

        # Add text content if provided
        if text_content:
            msg.attach(MIMEText(text_content, 'plain'))

        # Connect to SMTP server and send email
        server = smtplib.SMTP(EMAIL_CONFIG['host'], EMAIL_CONFIG['port'])

        if EMAIL_CONFIG['use_tls']:
            server.starttls()

        server.login(EMAIL_CONFIG['username'], EMAIL_CONFIG['password'])
        server.send_message(msg)
        server.quit()

        return True
    except Exception as e:
        logger.error(f"Error sending email: {str(e)}")
        return False

@app.route('/api/contact', methods=['POST'])
@limiter.limit("5 per hour")  # Security: Rate limit to prevent abuse
@require_email_config
def handle_contact_form():
    """Handle contact form submission"""
    try:
        data = request.get_json()

        # Security: Comprehensive input validation
        errors = validate_contact_form(data)
        if errors:
            return jsonify({
                'success': False,
                'message': '; '.join(errors)
            }), 400

        # Security: Log with redacted email
        logger.info(f"Contact form submission from {redact_email(data['email'])}: {html.escape(data['subject'][:50])}")

        # Send email to admin
        admin_subject = f"New Contact Form Submission: {data['subject']}"
        admin_html = create_contact_email_template(data)
        admin_text = f"""
New Contact Form Submission

Name: {data['name']}
Email: {data['email']}
Subject: {data['subject']}
Message: {data['message']}

Submitted: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
        """.strip()

        admin_email_sent = send_email(
            EMAIL_CONFIG['to_emails'],
            admin_subject,
            admin_html,
            admin_text,
            reply_to=data['email']
        )

        # Send auto-reply to customer
        auto_reply_subject = f"Thank you for contacting SysDak - {data['subject']}"
        auto_reply_html = create_auto_reply_template(data)
        auto_reply_text = f"""
Dear {data['name']},

Thank you for reaching out to SysDak. We have received your message regarding "{data['subject']}" and will get back to you as soon as possible.

Your message:
"{data['message']}"

We typically respond within 24-48 business hours. If you need immediate assistance, please call us at +91 8946060246.

Best regards,
The SysDak Team

SysDak - IT Solutions & Services
Email: contact@sysdak.com
Phone: +91 8946060246
        """.strip()

        auto_reply_sent = send_email(
            [data['email']],
            auto_reply_subject,
            auto_reply_html,
            auto_reply_text
        )

        if admin_email_sent and auto_reply_sent:
            return jsonify({
                'success': True,
                'message': 'Your message has been sent successfully. We will contact you soon!'
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Failed to send email. Please try again.'
            }), 500

    except Exception as e:
        logger.error(f"Error processing contact form: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'An error occurred while processing your request.'
        }), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'email_configured': all([EMAIL_CONFIG['username'], EMAIL_CONFIG['password'], EMAIL_CONFIG['from_email'], EMAIL_CONFIG['to_emails']])
    })

@app.route('/api/test-email', methods=['POST'])
@limiter.limit("3 per hour")  # Security: Rate limit test endpoint
@require_email_config
def test_email():
    """Test email configuration"""
    try:
        data = request.get_json()
        test_email_addr = data.get('email', EMAIL_CONFIG['from_email'])
        
        # Security: Validate email
        if not validate_email(test_email_addr):
            return jsonify({
                'success': False,
                'message': 'Invalid email address'
            }), 400

        # Send test email
        subject = "SysDak Email Service Test"
        html_content = """
        <h2>🧪 Email Service Test</h2>
        <p>This is a test email from the SysDak email service.</p>
        <p>If you received this email, the SMTP configuration is working correctly!</p>
        <p><strong>Timestamp:</strong> """ + datetime.now().strftime('%B %d, %Y at %I:%M %p') + """</p>
        """
        text_content = f"""
Email Service Test

This is a test email from the SysDak email service.
If you received this email, the SMTP configuration is working correctly!

Timestamp: {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
        """.strip()

        success = send_email([test_email_addr], subject, html_content, text_content)

        if success:
            return jsonify({
                'success': True,
                'message': f'Test email sent successfully to {test_email_addr}'
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Failed to send test email'
            }), 500

    except Exception as e:
        logger.error(f"Error in test email: {str(e)}")
        return jsonify({
            'success': False,
            'message': 'Error occurred'
        }), 500

# Security: Add security headers to all responses
@app.after_request
def add_security_headers(response):
    response.headers['X-Content-Type-Options'] = 'nosniff'
    response.headers['X-Frame-Options'] = 'DENY'
    response.headers['X-XSS-Protection'] = '1; mode=block'
    return response

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return jsonify({'success': False, 'message': 'Resource not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    """Handle 500 errors"""
    logger.error(f"Internal error: {str(error)}")
    return jsonify({'success': False, 'message': 'An error occurred'}), 500

@app.errorhandler(413)
def request_entity_too_large(error):
    """Handle request too large errors"""
    return jsonify({'success': False, 'message': 'Request too large'}), 413

if __name__ == '__main__':
    # Check email configuration on startup
    if not all([EMAIL_CONFIG['username'], EMAIL_CONFIG['password'], EMAIL_CONFIG['from_email'], EMAIL_CONFIG['to_emails']]):
        logger.warning("Email service not fully configured. Some features may not work.")

    logger.info("Starting SysDak Email Service API...")
    
    # Security: Use environment variables for configuration
    debug_mode = os.getenv('FLASK_DEBUG', 'False').lower() == 'true'
    host = os.getenv('FLASK_HOST', '127.0.0.1')
    port = int(os.getenv('FLASK_PORT', '5000'))
    
    if debug_mode:
        logger.warning("⚠️  DEBUG MODE IS ENABLED - DO NOT USE IN PRODUCTION!")
    
    app.run(debug=debug_mode, host=host, port=port)