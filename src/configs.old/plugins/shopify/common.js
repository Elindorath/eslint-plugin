'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/shopify/binary-assignment-parens': [ERROR, 'always'],
    '@elindorath/shopify/class-property-semi': [ERROR, 'always'],
    '@elindorath/shopify/images-no-direct-imports': [ERROR],
    '@elindorath/shopify/no-ancestor-directory-import': [ERROR],
    // OFF as it is a duplicate of the core rule no-debugger
    '@elindorath/shopify/no-debugger': [OFF],
    '@elindorath/shopify/no-fully-static-classes': [ERROR],
    // OFF as it conlict with the rule import/no-namespace
    // As this rule have an option to allow specific modules
    // unlike import/no-namespace, this two rules might be inverted
    '@elindorath/shopify/no-namespace-imports': [OFF, {
      allow: [], // Default
    }],
    '@elindorath/shopify/no-useless-computed-properties': [ERROR],
    // OFF as we don't use Polaris: https://github.com/Shopify/polaris-react
    '@elindorath/shopify/polaris-no-bare-stack-item': [OFF],
    // OFF as we don't use Polaris: https://github.com/Shopify/polaris-react
    '@elindorath/shopify/polaris-prefer-sectioned-prop': [OFF],
    // OFF as it is buggy, doesn't seems to support spread operator in this.state
    // TODO: fix it
    '@elindorath/shopify/prefer-class-properties': [OFF, 'always'],
    '@elindorath/shopify/prefer-early-return': [ERROR, {
      maximumStatements: 1, // Default
    }],
    '@elindorath/shopify/prefer-module-scope-constants': [ERROR],
    // OFF as we don't use Twine: https://github.com/Shopify/twine
    '@elindorath/shopify/prefer-twine': [OFF],
    '@elindorath/shopify/restrict-full-import': [ERROR, []], // Default
    // OFF as we don't use sinon: https://github.com/sinonjs/sinon
    '@elindorath/shopify/sinon-no-restricted-features': [OFF, {
      restricted: [], // Default
      aliases: ['sinon'], // Default
      injected: true,
    }],
    // OFF as we don't use sinon: https://github.com/sinonjs/sinon
    '@elindorath/shopify/sinon-prefer-meaningful-assertions': [OFF],
    // TODO: Might conflict with the plugin eslint-plugin-boundaries
    '@elindorath/shopify/strict-component-boundaries': [ERROR],
  },
};
