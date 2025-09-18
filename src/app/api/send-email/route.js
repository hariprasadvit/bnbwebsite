import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(request) {
  try {
    const { to, subject, html } = await request.json();
    
    console.log('📧 Sending email to:', to);
    console.log('📧 Email content preview:', { subject, htmlLength: html.length });
    
    // Try SendGrid first (most reliable)
    if (process.env.SENDGRID_API_KEY) {
      try {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        
        const msg = {
          to: to, // Array of recipients
          from: process.env.FROM_EMAIL || 'noreply@booleanand beyond.com',
          subject: subject,
          html: html,
        };
        
        await sgMail.sendMultiple(msg);
        console.log('✅ Email sent successfully via SendGrid to:', to);
        
        return NextResponse.json({ 
          success: true, 
          message: 'Email sent successfully',
          service: 'SendGrid',
          recipients: to 
        });
        
      } catch (sendGridError) {
        console.error('❌ SendGrid error:', sendGridError);
      }
    }
    
    // Try webhook as fallback
    if (process.env.EMAIL_WEBHOOK_URL) {
      try {
        const response = await fetch(process.env.EMAIL_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to,
            subject,
            html,
            timestamp: new Date().toISOString()
          })
        });
        
        if (response.ok) {
          console.log('✅ Email sent via webhook');
          return NextResponse.json({ 
            success: true, 
            message: 'Email sent via webhook',
            service: 'Webhook',
            recipients: to 
          });
        }
      } catch (webhookError) {
        console.error('❌ Webhook error:', webhookError);
      }
    }
    
    // Try direct SMTP as last resort
    try {
      const nodemailer = await import('nodemailer');
      
      const transporter = nodemailer.default.createTransporter({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
      
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: to.join(', '),
        subject: subject,
        html: html
      };
      
      const info = await transporter.sendMail(mailOptions);
      console.log('✅ Email sent via SMTP:', info.messageId);
      
      return NextResponse.json({ 
        success: true, 
        message: 'Email sent via SMTP',
        service: 'SMTP',
        messageId: info.messageId,
        recipients: to 
      });
      
    } catch (smtpError) {
      console.error('❌ SMTP error:', smtpError);
    }
    
    // All methods failed - log for manual processing
    console.log('\n🚨 EMAIL NOTIFICATION - IMMEDIATE ACTION REQUIRED 🚨');
    console.log('='.repeat(70));
    console.log('📧 NEW LEAD SUBMISSION - PLEASE PROCESS MANUALLY');
    console.log('='.repeat(70));
    console.log('📬 Recipients:', to.join(', '));
    console.log('📋 Subject:', subject);
    console.log('🕐 Timestamp:', new Date().toLocaleString());
    console.log('='.repeat(70));
    console.log('📄 EMAIL CONTENT:');
    console.log(html);
    console.log('='.repeat(70));
    console.log('⚠️  PLEASE FORWARD THIS TO THE TEAM IMMEDIATELY ⚠️');
    console.log('='.repeat(70));
    
    // Also try a simple fetch to a webhook if available
    try {
      if (process.env.NEXT_PUBLIC_WEBHOOK_URL) {
        await fetch(process.env.NEXT_PUBLIC_WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to, subject, html, timestamp: new Date().toISOString() })
        });
        console.log('✅ Backup webhook notification sent');
      }
    } catch (e) {
      console.log('❌ Backup webhook failed:', e.message);
    }
    
    return NextResponse.json({ 
      success: true, // Return true so user flow continues
      message: 'Email logged for manual processing - check console',
      service: 'Console Log',
      recipients: to,
      fallback: true
    });
    
  } catch (error) {
    console.error('❌ Email API error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Email processing failed',
        fallback: true 
      },
      { status: 200 }
    );
  }
}
