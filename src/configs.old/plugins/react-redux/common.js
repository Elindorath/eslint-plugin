'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';


module.exports = {
  rules: {
    '@elindorath/react-redux/connect-prefer-minimum-two-arguments': [ERROR],
    '@elindorath/react-redux/connect-prefer-named-arguments': [ERROR],
    '@elindorath/react-redux/mapDispatchToProps-returns-object': [ERROR],
    '@elindorath/react-redux/mapDispatchToProps-prefer-shorthand': [ERROR],
    '@elindorath/react-redux/mapDispatchToProps-prefer-parameters-names': [ERROR],
    '@elindorath/react-redux/mapStateToProps-no-store': [ERROR],
    '@elindorath/react-redux/mapStateToProps-prefer-hoisted': [ERROR],
    '@elindorath/react-redux/mapStateToProps-prefer-parameters-names': [ERROR],
    '@elindorath/react-redux/mapStateToProps-prefer-selectors': [ERROR, {
      matching: '^get.*',
      validateParams: true, // Default
    }],
    '@elindorath/react-redux/useSelector-prefer-selectors': [ERROR, {
      matching: '^get.*',
      validateParams: true, // Default
    }],
    // Supersed the rule react/no-unused-prop-types
    '@elindorath/react-redux/no-unused-prop-types': [ERROR],
    '@elindorath/react-redux/prefer-separate-component-file': [ERROR],

    /* ----- Reset base config ----- */
    'react/no-unused-prop-types': [OFF],
  },
};
