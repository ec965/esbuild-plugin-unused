export interface Options {
  srcDirectory?: string;
}

export default function plugin(opts: Options): import("esbuild").Plugin;
