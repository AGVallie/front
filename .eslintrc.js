export default {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended", // 기본 ESLint 규칙
    "plugin:@typescript-eslint/recommended", // TypeScript 규칙 (타입스크립트가 있을 경우)
    "plugin:react/recommended", // React 규칙
    "plugin:react-hooks/recommended", // React Hooks 규칙
    "plugin:import/errors", // import 규칙
    "plugin:import/warnings", // import 규칙
    "plugin:import/typescript", // TypeScript import 규칙
    "plugin:prettier/recommended", // Prettier 규칙 (맨 마지막에)
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "react/react-in-jsx-scope": "off", // React 17 이상에서는 필요하지 않음
    "@typescript-eslint/explicit-module-boundary-types": "off", // 명시적인 반환 타입을 강제하지 않음
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external"],
          ["internal"],
          ["parent", "sibling", "index"],
        ],
        "newlines-between": "always", // 각 그룹 간에 새로운 줄을 넣도록 설정
      },
    ],
  },
  settings: {
    react: {
      version: "detect", // React 버전을 자동으로 감지
    },
  },
};
