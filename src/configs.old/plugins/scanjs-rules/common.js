'use strict';


const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

// TODO: All this rules aren't maintained neither documented
// Might be eligible to deletion
module.exports = {
  rules: {
    '@elindorath/scanjs-rules/accidental_assignment': [ERROR],
    '@elindorath/scanjs-rules/assign_to_hostname': [ERROR],
    '@elindorath/scanjs-rules/assign_to_href': [ERROR],
    '@elindorath/scanjs-rules/assign_to_location': [ERROR],
    '@elindorath/scanjs-rules/assign_to_onmessage': [ERROR],
    '@elindorath/scanjs-rules/assign_to_pathname': [ERROR],
    '@elindorath/scanjs-rules/assign_to_protocol': [ERROR],
    '@elindorath/scanjs-rules/assign_to_search': [ERROR],
    '@elindorath/scanjs-rules/assign_to_src': [ERROR],
    '@elindorath/scanjs-rules/call_Function': [ERROR],
    '@elindorath/scanjs-rules/call_addEventListener': [ERROR],
    '@elindorath/scanjs-rules/call_addEventListener_deviceproximity': [ERROR],
    '@elindorath/scanjs-rules/call_addEventListener_message': [ERROR],
    '@elindorath/scanjs-rules/call_connect': [ERROR],
    '@elindorath/scanjs-rules/call_eval': [ERROR],
    '@elindorath/scanjs-rules/call_execScript': [ERROR],
    '@elindorath/scanjs-rules/call_hide': [ERROR],
    '@elindorath/scanjs-rules/call_open_remote=true': [ERROR],
    '@elindorath/scanjs-rules/call_parseFromString': [ERROR],
    '@elindorath/scanjs-rules/call_setImmediate': [ERROR],
    '@elindorath/scanjs-rules/call_setInterval': [ERROR],
    '@elindorath/scanjs-rules/call_setTimeout': [ERROR],
    '@elindorath/scanjs-rules/identifier_indexedDB': [ERROR],
    '@elindorath/scanjs-rules/identifier_localStorage': [ERROR],
    '@elindorath/scanjs-rules/identifier_sessionStorage': [ERROR],
    '@elindorath/scanjs-rules/new_Function': [ERROR],
    '@elindorath/scanjs-rules/property_addIdleObserver': [ERROR],
    '@elindorath/scanjs-rules/property_createContextualFragment': [ERROR],
    '@elindorath/scanjs-rules/property_crypto': [ERROR],
    '@elindorath/scanjs-rules/property_geolocation': [ERROR],
    '@elindorath/scanjs-rules/property_getUserMedia': [ERROR],
    '@elindorath/scanjs-rules/property_indexedDB': [ERROR],
    '@elindorath/scanjs-rules/property_localStorage': [ERROR],
    '@elindorath/scanjs-rules/property_mgmt': [ERROR],
    '@elindorath/scanjs-rules/property_sessionStorage': [ERROR],
  },
};
