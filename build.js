const unused = require("./src/index");
const { build } = require("esbuild");

build({
  entryPoints: ["example/index.js"],
  bundle: true,
  outfile: "dist/out.js",
  plugins: [unused({ src: "./example/**/*" })],
}).catch(() => process.exit(1));
