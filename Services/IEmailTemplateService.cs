namespace TestUmbPro.Services
{
    public interface IEmailTemplateService
    {
        (string Subject, string Body) GetTemplate(string templateKey);
    }
}