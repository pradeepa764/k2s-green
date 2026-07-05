using System.Net;
using System.Net.Mail;
using Microsoft.Extensions.Logging;

namespace TestUmbPro.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string to, string subject, string body);
    }

    public class EmailService : IEmailService
    {
        private readonly ILogger<EmailService> _logger;

        public EmailService(ILogger<EmailService> logger)
        {
            _logger = logger;
        }

        public async Task SendEmailAsync(string to, string subject, string body)
        {
            try
            {
                var fromEmail = "noreply@company.com";
                var password = "password";

                using var message = new MailMessage
                {
                    From = new MailAddress(fromEmail),
                    Subject = subject,
                    Body = body,
                    IsBodyHtml = true
                };

                message.To.Add(to);

                using var smtp = new SmtpClient("smtp.office365.com", 587)
                {
                    Credentials = new NetworkCredential(fromEmail, password),
                    EnableSsl = true,
                    DeliveryMethod = SmtpDeliveryMethod.Network,
                    UseDefaultCredentials = false
                };

                _logger.LogWarning(
                    "📧 Sending Email | To={To} | Subject={Subject}",
                    to,
                    subject);

                await smtp.SendMailAsync(message);

                _logger.LogWarning(
                    "✅ Email Sent Successfully | To={To}",
                    to);
            }
            catch (SmtpException smtpEx)
            {
                _logger.LogError(
                    smtpEx,
                    "❌ SMTP Error while sending email | To={To}",
                    to);
            }
            catch (Exception ex)
            {
                _logger.LogError(
                    ex,
                    "❌ Unexpected error while sending email | To={To}",
                    to);
            }
        }
    }
}