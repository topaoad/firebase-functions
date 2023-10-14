module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "google",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json", "tsconfig.dev.json"],
    sourceType: "module",
  },
  ignorePatterns: ["/lib/**/*"],
  plugins: ["@typescript-eslint", "import"],
  rules: {
    quotes: ["warn", "double"],
    "import/no-unresolved": 0,
    indent: ["warn", 2],
    "object-curly-spacing": ["warn", "never"],
    "comma-spacing": ["error", { before: false, after: true }],
    "max-len": ["warn", { code: 80 }],
    "quote-props": ["warn", "consistent"],
    semi: ["warn", "always"],
    // importとexportの序列を自動整形してくれます。
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "error",
    // 使用していないimportを削除します。
    "unused-imports/no-unused-imports": "error",
  },
}
