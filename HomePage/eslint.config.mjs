import next from "@next/eslint-plugin-next";
import js from "@eslint/js";
import ts from "typescript-eslint";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...next.configs["core-web-vitals"],
];
