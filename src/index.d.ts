export interface Options {
  src?: string | string[];
  filter?: RegExp;
}

export default function plugin(opts?: Options): import("esbuild").Plugin;
