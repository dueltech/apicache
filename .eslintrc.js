"use strict";
/* eslint sort-keys: 2*/
/* eslint object-property-newline: 2*/
/* eslint quote-props: [2, "consistent"]*/

const self = (module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    "array-bracket-spacing": [2, "never"],
    "array-callback-return": 2,
    "array-element-newline": [2, "consistent"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "brace-style": [2, "stroustrup"],
    camelcase: [
      2,
      {
        ignoreDestructuring: true,
        properties: "never",
      },
    ],
    "capitalized-comments": [
      2,
      "always",
      {
        ignorePattern: "fallthrough|console",
      },
    ],
    "comma-dangle": [
      2,
      {
        arrays: "always-multiline",
        exports: "always-multiline",
        functions: "never",
        imports: "always-multiline",
        objects: "always-multiline",
      },
    ],
    "comma-spacing": [
      2,
      {
        after: true,
        before: false,
      },
    ],
    curly: 2,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eol-last": [2, "always"],
    eqeqeq: 2,
    "key-spacing": [
      2,
      {
        afterColon: true,
        beforeColon: false,
      },
    ],
    "keyword-spacing": 2,
    "linebreak-style": [2, "unix"],
    "max-statements-per-line": 2,
    "multiline-comment-style": [2, "starred-block"],
    "no-console": 1,
    "no-constructor-return": 2,
    "no-dupe-else-if": 2,
    "no-dupe-keys": 2,
    "no-else-return": 2,
    "no-empty": [
      2,
      {
        allowEmptyCatch: true,
      },
    ],
    "no-implicit-coercion": 2,
    "no-lonely-if": 2,
    "no-loss-of-precision": 2,
    "no-misleading-character-class": 2,
    "no-multi-spaces": 2,
    "no-multiple-empty-lines": [
      2,
      {
        max: 2,
        maxBOF: 1,
        maxEOF: 1,
      },
    ],
    "no-new-object": 2,
    "no-new-wrappers": 2,
    "no-return-await": 2,
    "no-setter-return": 2,
    "no-tabs": 2,
    "no-template-curly-in-string": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-unneeded-ternary": 2,
    "no-unreachable-loop": 2,
    "no-unused-expressions": [2, { allowShortCircuit: true }],
    "no-unused-vars": [
      2,
      {
        args: "all",
        argsIgnorePattern: "^(req|res|next)$|^_",
        caughtErrors: "all",
        varsIgnorePattern: "^_$",
      },
    ],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-return": 2,
    "no-var": 2,
    "object-curly-newline": [2, { consistent: true }],
    "object-curly-spacing": [2, "never"],
    "object-shorthand": [2, "properties"],
    "operator-linebreak": [
      2,
      "before",
      {
        overrides: {
          ":": "ignore",
          "?": "ignore",
        },
      },
    ],
    "prefer-arrow-callback": 2,
    "prefer-const": [2, { destructuring: "all" }],
    "prefer-destructuring": [
      2,
      {
        array: false,
        object: true,
      },
    ],
    "prefer-object-spread": 2,
    "prefer-regex-literals": 2,
    "prefer-rest-params": 0,
    "quote-props": [2, "as-needed"],
    quotes: [
      2,
      "single",
      {
        allowTemplateLiterals: true,
        avoidEscape: true,
      },
    ],
    radix: 2,
    "require-atomic-updates": 0,
    semi: [2, "always"],
    "space-before-blocks": 2,
    "space-before-function-paren": [
      2,
      {
        anonymous: "always",
        asyncArrow: "always",
        named: "never",
      },
    ],
    "space-unary-ops": [
      2,
      {
        nonwords: false,
        overrides: { "!": true },
        words: true,
      },
    ],
    "spaced-comment": [
      2,
      "always",
      {
        markers: ["!"],
      },
    ],
    strict: 2,
    yoda: 2,
  },
});

self.overrides = [
  {
    files: ["test/**/*.js"],
    globals: {
      after: true,
      before: true,
      beforeEach: true,
      describe: true,
      expect: true,
      it: true,
    },
    rules: {
      "no-unused-expressions": 0,
      "prefer-arrow-callback": 0,
    },
  },
];
