/**
 * Esbuild Plugin Unused
 * @param {import("./index").Options} opts
 * @returns {import('esbuild').Plugin}
 */
function plugin(opts) {
  const { src = "src/**/*", filter = /.*\.(j|t)sx?$/ } = opts;
  return {
    name: "unused",
    async setup(build) {
      const path = require("path");
      const fg = require("fast-glob");
      const {default: chalk}= await import('chalk');

      let globbed = await fg(src);
      let resolvedFiles = globbed.map((file) => path.resolve(file));
      const files = new Set(resolvedFiles);

      build.onLoad({ filter }, (args) => {
        files.delete(path.resolve(args.path));
      });

      build.onEnd(() => {
        console.log(chalk.red(`Found ${files.size} Unused Files`));
        for (const file of files) {
          console.log(`- ${file}`);
        }
      });
    },
  };
}

module.exports = plugin;
