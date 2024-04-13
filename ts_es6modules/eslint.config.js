import { fileURLToPath } from 'url';
import { dirname } from 'path';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

// __dirname is not defined in ES module scope, so we recreate it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
    languageOptions: {
        ecmaVersion: 2022, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows using import/export statements
        parser: tsParser, // Specifies the ESLint parser for TypeScript
    },
    plugins: {
        '@typescript-eslint': tsPlugin
    },
    rules: {
        "eqeqeq": "error",
        "no-trailing-spaces": "error",
        "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
        "@typescript-eslint/explicit-function-return-type": "off",
    },
    files: ['*.ts', '*.tsx'],
};
