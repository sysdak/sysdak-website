from flask import Flask, request, jsonify, render_template_string
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.html import MIMEHtml
import logging
from datetime import datetime
from functools import wraps
import json
import re

app = Flask(__name__)
CORS(app)

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
    """Validate email format"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

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
    """Create HTML email template for contact form submission"""
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
                    <span>{data['name']}</span>
                </div>
                <div class="field">
                    <span class="label">📧 Email:</span>
                    <span>{data['email']}</span>
                </div>
                <div class="field">
                    <span class="label">📝 Subject:</span>
                    <span>{data['subject']}</span>
                </div>
                <div class="field">
                    <span class="label">💬 Message:</span>
                    <p>{data['message'].replace(chr(10), '<br>')}</p>
                </div>
                <div class="timestamp">
                    <strong>Submitted:</strong> {datetime.now().strftime('%B %d, %Y at %I:%M %p')}
                </div>
            </div>
            <div class="footer">
                <p>This email was sent from the contact form on your website.</p>
                <p>SysDak - IT Solutions & Services</p>
            </div>
        </div>
    </body>
    </html>
    """

def create_auto_reply_template(data):
    """Create HTML email template for auto-reply"""
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
                <p>Dear {data['name']},</p>
                <p>Thank you for reaching out to SysDak. We have received your message regarding <strong>"{data['subject']}"</strong> and will get back to you as soon as possible.</p>

                <div class="message-box">
                    <h3>📋 Your Message:</h3>
                    <p><em>{data['message'].replace(chr(10), '<br>')}</em></p>
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
                <p>SysDak - IT Solutions & Services</p>
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
        msg.attach(MIMEHtml(html_content, 'html'))

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
@require_email_config
def handle_contact_form():
    """Handle contact form submission"""
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if not data.get(field):
                return jsonify({
                    'success': False,
                    'message': f'{field} is required'
                }), 400

        # Validate email format
        if not validate_email(data['email']):
            return jsonify({
                'success': False,
                'message': 'Invalid email format'
            }), 400

        # Log the submission
        logger.info(f"Contact form submission from {data['email']}: {data['subject']}")

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
@require_email_config
def test_email():
    """Test email configuration"""
    try:
        data = request.get_json()
        test_email = data.get('email', EMAIL_CONFIG['from_email'])

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

        success = send_email([test_email], subject, html_content, text_content)

        if success:
            return jsonify({
                'success': True,
                'message': f'Test email sent successfully to {test_email}'
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
            'message': f'Error: {str(e)}'
        }), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({'success': False, 'message': 'Endpoint not found'}), 404

@app.errorhandler(500)
def internal_error(error):
    return jsonify({'success': False, 'message': 'Internal server error'}), 500

if __name__ == '__main__':
    # Check email configuration on startup
    if not all([EMAIL_CONFIG['username'], EMAIL_CONFIG['password'], EMAIL_CONFIG['from_email'], EMAIL_CONFIG['to_emails']]):
        logger.warning("Email service not fully configured. Some features may not work.")

    logger.info("Starting SysDak Email Service API...")
    app.run(debug=True, host='0.0.0.0', port=5000)