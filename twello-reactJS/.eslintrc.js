const objectCurlyNewlineRule = { multiline: true, minProperties: 2 };

module.exports = {
  plugins: ["react-hooks"],
  parser: "babel-eslint",
  extends: "airbnb",
  globals: {
    __DEV__: "readonly"
  },
  env: {
    jest: true,
    node: true,
    browser: true,
    es6: true
  },
  rules: {
    indent: [
      "error",
      4,
      {
        SwitchCase: 0,
        CallExpression: { arguments: "first" },
        FunctionExpression: { parameters: "first" },
        FunctionDeclaration: { parameters: "first" }
      }
    ],
    "react/jsx-one-expression-per-line": [1, { allow: "none" }],
    "react/jsx-max-props-per-line": [1, { maximum: 1, when: "always" }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-indent": [1, 4, { checkAttributes: false }],
    "react/jsx-indent-props": [2, 4],
    "no-underscore-dangle": "off",
    "no-multiple-empty-lines": ["error", { max: 1 }],
    "no-multi-spaces": "error",
    "no-else-return": "off",
    "newline-per-chained-call": "off",
    "global-require": "off",
    "no-trailing-spaces": "error",
    "max-len": ["error", { code: 100, tabWidth: 4, ignoreStrings: true }],
    "react/jsx-closing-bracket-location": [
      "error",
      {
        nonEmpty: "after-props",
        selfClosing: "after-props"
      }
    ],
    quotes: ["error", "single"],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"]
      }
    ],
    "implicit-arrow-linebreak": "off",
    "no-confusing-arrow": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "comma-dangle": ["error", "always-multiline"],
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/__tests__/*.js"] }
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],
    "arrow-parens": ["error", "always"],
    "no-control-regex": "off",
    "no-plusplus": "off",
    "no-bitwise": "off",
    "react/forbid-foreign-prop-types": "off",
    "object-property-newline": "error",
    "object-curly-newline": [
      "error",
      {
        ImportDeclaration: objectCurlyNewlineRule,
        ExportDeclaration: objectCurlyNewlineRule
      }
    ],
    "import/no-unused-modules": [
      "error",
      {
        missingExports: true,
        unusedExports: true
      }
    ],
    "import/prefer-default-export": "off",
    "import/exports-last": ["error", "always"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error"
  }
};
