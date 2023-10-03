import antfu from '@antfu/eslint-config'

export default antfu(
  {},
  {
    ignores: [
      'node_modules/',
      'dist/',
      'migrations/',
      '**/node_modules/**',
      '**/dist/**',
      '**/.nuxt',
      '**/.output',
      '**/.github',
      '**/coverage',
      '**/nuxt.d.ts',
      '**/.DS_Store',
      '**/.vscode',
      '**/**.yml',
    ],
  },
  {
    rules: {
      'no-console': 'warn',
      'vue/no-deprecated-slot-attribute': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'import/order': 'off',
      'n/prefer-global/process': 'off',
      'node/prefer-global/process': 'off',
      'ts/ban-ts-comment': 'off',
      'ts/consistent-type-definitions': 'off',
    },
  },
  {
    files: [
      '**/tests/**/*.ts',
    ],
    rules: {
      'unused-imports/no-unused-vars': 'off',
      'no-console': 'off',
    },
  },
)
