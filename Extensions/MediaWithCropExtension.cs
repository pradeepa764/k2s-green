using Umbraco.Cms.Core.Models;

namespace TestUmbPro.Extensions
{
    public static class MediaWithCropsExtension
    {
        public static string GetAltText(this MediaWithCrops mediaItem, string altTextAlias = "altText")
        {
            var altText = mediaItem.Value<string>(altTextAlias);

            return string.IsNullOrWhiteSpace(altText) ? string.Empty : altText;
        }
    }
}