/** @type {import('stylelint').Config} */
module.exports = {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'color-hex-length': 'long',
    'max-nesting-depth': 4,
    'no-descending-specificity': null,
    'selector-max-id': 0,
    'selector-class-pattern': '^[a-z0-9\\-]+$',

    'scss/dollar-variable-pattern': '^[a-z0-9-]+$',
    'scss/percent-placeholder-pattern': '^%[a-z0-9-]+$',
    'scss/at-function-pattern': '^[a-z0-9-]+$',
    'scss/at-mixin-pattern': '^[a-z0-9-]+$',
    'scss/dollar-variable-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'after-comment', 'after-dollar-variable'],
      },
    ],
    'scss/double-slash-comment-empty-line-before': [
      'always',
      {
        except: ['first-nested', 'inside-block'],
        ignore: ['between-comments', 'stylelint-commands', 'inside-block'],
      },
    ],

    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'z-index',
      'display',
      'flex',
      'justify-content',
      'align-items',
      'width',
      'height',
      'margin',
      'padding',
      'background',
      'color',
      'border',
      'box-shadow',
      'font-size',
      'line-height',
    ],
  },
};
