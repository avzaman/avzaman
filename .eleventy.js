// .eleventy.js
module.exports = function (eleventyConfig) {
    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["md", "html"],
        passthroughFileCopy: true
    };
};
