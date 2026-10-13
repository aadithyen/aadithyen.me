export default async function (eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("site");

  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");
}

export const config = {
  dir: {
    input: ".",
    includes: "includes",
    output: "site",
    markdownTemplateEngine: "njk",
  },
};
