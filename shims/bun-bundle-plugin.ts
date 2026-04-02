/**
 * Bun plugin that shims `bun:bundle` for running the source directly.
 *
 * In the official build pipeline Bun's bundler provides `feature()` for
 * dead-code elimination.  When we run the raw source with `bun run` we
 * need a runtime replacement.  This plugin intercepts every
 * `import … from 'bun:bundle'` and returns a module whose `feature()`
 * always returns `false` — the same behaviour as the *external* build
 * (all internal-only feature gates are off).
 *
 * It also handles `.md` file imports that Bun's bundler normally inlines
 * as text strings at build time.
 */
import { plugin } from 'bun';
import { readFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';

plugin({
  name: 'bun-bundle-shim',
  setup(build) {
    // Shim bun:bundle's feature() function
    build.module('bun:bundle', () => {
      return {
        exports: {
          feature(_name: string): boolean {
            return false;
          },
        },
        loader: 'object',
      };
    });

    // Handle .md file imports — Bun's bundler normally inlines these as
    // strings at build time via the "text" loader. At runtime we read them
    // from disk (or return '' if the file doesn't exist).
    build.onLoad({ filter: /\.md$/ }, (args) => {
      let contents = '';
      try {
        if (existsSync(args.path)) {
          contents = readFileSync(args.path, 'utf-8');
        }
      } catch {
        // silently return empty string
      }
      return {
        contents: `export default ${JSON.stringify(contents)};`,
        loader: 'js',
      };
    });
  },
});
