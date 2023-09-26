// import antfu from '@antfu/eslint-config'

// export default antfu(
//   {
//     rules: {
//       "no-console": "warn",
//       "@typescript-eslint/ban-ts-comment": "off",
//       "n/prefer-global/process": "off"
//     }
//   }
// )

var antfu = require('@antfu/eslint-config');

module.exports = antfu({
  rules: {
    "no-console": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "n/prefer-global/process": "off"
  }
});