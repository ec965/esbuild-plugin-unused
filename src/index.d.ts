export interface Options {
  src?: string | string[];
}

export default function plugin(opts: Options): import("esbuild").Plugin;
