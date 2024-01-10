module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
    "next",
    "next/core-web-vitals",
  ],

  parser: "@typescript-eslint/parser",
  root: true,
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },

  plugins: ["react", "prettier", "@typescript-eslint", "import"],
  rules: {
    "no-nested-ternary": "off",
    "react/jsx-props-no-spreading": "off",
    "no-use-before-define": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".ts", ".tsx"] }],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx", ".svg"],
      },
    },
  },
};
