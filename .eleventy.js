module.exports = function(eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");
    eleventyConfig.addPassthroughCopy({ "./src/css": "assets/css" });
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/js");
    eleventyConfig.addPassthroughCopy("./src/manifest.json");
    return {
      dir: {
        input: "src",
        output: "public"
      }
    }
  };
  