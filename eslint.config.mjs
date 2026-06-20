import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...nextVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "build/**", "coverage/**", "next-env.d.ts", "out/**"],
  },
];

export default eslintConfig;
