import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'idmeta-react-native' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

// @ts-expect-error
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const IdmetaReactNativeModule = isTurboModuleEnabled
  ? require('./NativeIdmetaReactNative').default
  : NativeModules.IdmetaReactNativeModule;

const IdmetaReactNative = IdmetaReactNativeModule
  ? IdmetaReactNativeModule
  : new Proxy(
    {},
    {
      get() {
        throw new Error(LINKING_ERROR);
      },
    }
  );

export function multiply(a: number, b: number): Promise<number> {
  return IdmetaReactNative.multiply(a, b);
}

export function startIdmetaFlow(flowId: string, userToken: string): void {
  IdmetaReactNative.startIdmetaFlow(flowId, userToken);
}