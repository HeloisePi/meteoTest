import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // Interdit `any`
      "@typescript-eslint/explicit-function-return-type": "warn", // Avertit si une fonction n'a pas de type de retour
      "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }], // Ignore les variables commencant par `_`
      "no-console": "warn", // Avertit si `console.log()` est utilisé
      "eqeqeq": ["error", "always"], // Oblige `===` au lieu de `==`
      "curly": "error", // Force l'utilisation des `{}` dans les blocs if, while, etc.
    }
  }
];
