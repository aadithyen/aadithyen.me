export default async function (eleventyConfig) {
  // bundle
  eleventyConfig.addBundle("css");

  // ignore files
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("site");

  // passthrough files
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addWatchTarget("**/*.css");

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    }).format(dateObj),
  );

  eleventyConfig.addFilter("htmlDate", (dateObj) =>
    dateObj.toISOString().slice(0, 10),
  );
}

export const config = {
  dir: {
    input: ".",
    includes: ".",
    output: "site",
  },
};
