module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
  ],
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  env: { 
    "node": true, 
    "es6": true,
    "jest/globals": true, 
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  ignorePatterns: [
    "dist/**/*",
    "**/*.js",
  ],
  rules: {
  }
}
