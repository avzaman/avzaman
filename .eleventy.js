// .eleventy.js
module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets");
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["md", "html","png","jpg","gif"],
        passthroughFileCopy: true
    };
};
