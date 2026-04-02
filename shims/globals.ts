/**
 * Preload script: defines the MACRO global that the Bun bundler normally
 * inlines at build time via `--define`.
 *
 * All values mirror what the external (npm) build uses.
 */

declare global {
  const MACRO: {
    VERSION: string;
    PACKAGE_URL: string;
    NATIVE_PACKAGE_URL: string;
    BUILD_TIME: string;
    FEEDBACK_CHANNEL: string;
    ISSUES_EXPLAINER: string;
    VERSION_CHANGELOG: string;
  };
  // The build also sets a USER_TYPE string that some files inspect.
  // "external" matches the public npm build.
  var USER_TYPE: string;
  /**
   * Feature gates from `bun:bundle`; official builds DCE on the string literal.
   * Dev/raw `bun run` uses this stub (same as shims/bun-bundle-plugin.ts).
   */
  function feature(_name: string): boolean;
}

(globalThis as any).MACRO = {
  VERSION: '1.0.0-dev',
  PACKAGE_URL: '@anthropic-ai/claude-code',
  NATIVE_PACKAGE_URL: '@anthropic-ai/claude-code',
  BUILD_TIME: new Date().toISOString(),
  FEEDBACK_CHANNEL: '#claude-code-feedback',
  ISSUES_EXPLAINER:
    'report an issue at https://github.com/anthropics/claude-code/issues',
  VERSION_CHANGELOG: '',
};

(globalThis as any).USER_TYPE = 'external';

(globalThis as any).feature = function feature(_name: string): boolean {
  return false;
};
