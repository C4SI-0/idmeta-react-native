"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.multiply = multiply;
exports.startIdmetaFlow = startIdmetaFlow;
var _reactNative = require("react-native");
const LINKING_ERROR = `The package 'idmeta-react-native' doesn't seem to be linked. Make sure: \n\n` + _reactNative.Platform.select({
  ios: "- You have run 'pod install'\n",
  default: ''
}) + '- You rebuilt the app after installing the package\n' + '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const IdmetaReactNativeModule = isTurboModuleEnabled ? require('./NativeIdmetaReactNative').default : _reactNative.NativeModules.IdmetaReactNativeModule;
const IdmetaReactNative = IdmetaReactNativeModule ? IdmetaReactNativeModule : new Proxy({}, {
  get() {
    throw new Error(LINKING_ERROR);
  }
});
function multiply(a, b) {
  return IdmetaReactNative.multiply(a, b);
}
function startIdmetaFlow(flowId, userToken) {
  IdmetaReactNative.startIdmetaFlow(flowId, userToken);
}
//# sourceMappingURL=index.js.map