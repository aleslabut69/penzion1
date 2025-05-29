export default async function (eleventyConfig) {
    eleventyConfig.setInputDirectory("./src");
    eleventyConfig.setOutputDirectory("./dist");
    eleventyConfig.setIncludesDirectory("template");
  
    eleventyConfig.setTemplateFormats("html,njk");
  
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addPassthroughCopy("css");
  
    return {
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk",
    };
  }
  