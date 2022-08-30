# esbuild-plugin-unused

Find unused files in your esbuild project.

## Installation

```sh
yarn add -D esbuild-plugin-unused
```

```sh
npm i -D esbuild-plugin-unused
```

```sh
pnpm add -D esbuild-plugin-unused
```

## Usage

Add the plugin to your esbuild config.

```javascript
const unused = require("esbuild-plugin-unused");

require("esbuild").build({
  entryPoints: ["src/"],
  bundle: true,
  outfile: "dist/out.js",
  plugins: [unused()],
})
```

On build completion, you will get some console output telling you which files in your project are unused.

```sh
~/code/esbuild-plugin-unused ❯ pnpm build

> esbuild-plugin-unused@1.0.0 test /user/esbuild-plugin-unused
> node ./build.js

Found 2 Unused Files
- /user/esbuild-plugin-unused/example/unused.js
- /user/esbuild-plugin-unused/example/lib/unused.js
```

### Options

```typescript
export interface Options {
  // source file glob expression
  // defaults to src/**/*
  src?: string | string[];
  // Regular expression to filter files on.
  // defaults to `/.*\.(m|c)?(j|t)sx?$/`
  filter?: RegExp;
}
```
