export interface Options {
  src?: string | string[];
  filter?: RegExp;
}

function plugin(opts?: Options): import("esbuild").Plugin;

export default plugin;
