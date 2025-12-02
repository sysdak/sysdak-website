import nodemailer from 'nodemailer';

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  from: string;
  to: string[];
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private config: EmailConfig | null = null;

  constructor(config?: EmailConfig) {
    if (config) {
      this.configure(config);
    }
  }

  configure(config: EmailConfig) {
    this.config = config;
    this.transporter = nodemailer.createTransporter({
      host: config.host,
      port: config.port,
      secure: config.secure,
      auth: config.auth,
      tls: {
        rejectUnauthorized: false // For development, set to true in production
      }
    });
  }

  async sendContactEmail(data: EmailData): Promise<boolean> {
    if (!this.transporter || !this.config) {
      throw new Error('Email service not configured');
    }

    try {
      const mailOptions = {
        from: this.config.from,
        to: this.config.to.join(','),
        subject: `New Contact Form Submission: ${data.subject}`,
        html: this.generateContactEmailTemplate(data),
        text: this.generateContactEmailText(data),
        replyTo: data.email
      };

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  async sendAutoReply(data: EmailData): Promise<boolean> {
    if (!this.transporter || !this.config) {
      throw new Error('Email service not configured');
    }

    try {
      const mailOptions = {
        from: this.config.from,
        to: data.email,
        subject: `Thank you for contacting us - ${data.subject}`,
        html: this.generateAutoReplyTemplate(data),
        text: this.generateAutoReplyText(data),
      };

      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Error sending auto-reply:', error);
      throw error;
    }
  }

  private generateContactEmailTemplate(data: EmailData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0F52BA; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #0F52BA; }
          .footer { text-align: center; padding: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Name:</span> ${data.name}
            </div>
            <div class="field">
              <span class="label">Email:</span> ${data.email}
            </div>
            <div class="field">
              <span class="label">Subject:</span> ${data.subject}
            </div>
            <div class="field">
              <span class="label">Message:</span>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div class="footer">
            <p>This email was sent from the contact form on your website.</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateContactEmailText(data: EmailData): string {
    return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}
Message:
${data.message}

This email was sent from the contact form on your website.
    `.trim();
  }

  private generateAutoReplyTemplate(data: EmailData): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Thank You for Contacting Us</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #0F52BA; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .footer { text-align: center; padding: 20px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You for Contacting Us</h1>
          </div>
          <div class="content">
            <p>Dear ${data.name},</p>
            <p>Thank you for reaching out to us. We have received your message regarding "${data.subject}" and will get back to you as soon as possible.</p>
            <p>Here's a copy of your message:</p>
            <blockquote style="border-left: 4px solid #0F52BA; padding-left: 20px; margin: 20px 0;">
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            </blockquote>
            <p>We typically respond within 24-48 business hours. If you need immediate assistance, please call us at +91 8946060246.</p>
            <p>Best regards,<br>The SysDak Team</p>
          </div>
          <div class="footer">
            <p>SysDak - IT Solutions & Services<br>
            Email: syscatch0@gmail.com<br>
            Phone: +91 8946060246</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private generateAutoReplyText(data: EmailData): string {
    return `
Dear ${data.name},

Thank you for reaching out to us. We have received your message regarding "${data.subject}" and will get back to you as soon as possible.

Here's a copy of your message:
"${data.message}"

We typically respond within 24-48 business hours. If you need immediate assistance, please call us at +91 8946060246.

Best regards,
The SysDak Team

SysDak - IT Solutions & Services
Email: syscatch0@gmail.com
Phone: +91 8946060246
    `.trim();
  }

  async testConnection(): Promise<boolean> {
    if (!this.transporter) {
      throw new Error('Email service not configured');
    }

    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('Email service connection test failed:', error);
      throw error;
    }
  }
}

export default EmailService;
export { EmailService };