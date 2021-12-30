/*
 * @Description:
 * @Author: wsy
 * @Date: 2021-11-30 10:34:48
 * @LastEditTime: 2021-12-15 21:12:09
 * @LastEditors: wsy
 */
module.exports = {
  root: true,
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss'
    },
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended', 'stylelint-config-html'],
      rules: {
        'selector-pseudo-class-no-unknown': [
          true,
          {
            ignorePseudoClasses: ['deep', 'global']
          }
        ],
        'selector-pseudo-element-no-unknown': [
          true,
          {
            ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted']
          }
        ]
      }
    }
  ],
  plugins: ['stylelint-scss'],
  rules: {
    indentation: 2,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global']
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep']
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          '@',
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'else',
          'return',
          'use'
        ]
      }
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'unicode-bom': 'never',
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': null,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested']
      }
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'at-rule-empty-line-before': 'never',
    'property-no-unknown': null,
    'selector-id-pattern': null,
    'scss/no-global-function-names': null,
    'scss/at-import-partial-extension': null,
    'max-line-length': null
  }
}
