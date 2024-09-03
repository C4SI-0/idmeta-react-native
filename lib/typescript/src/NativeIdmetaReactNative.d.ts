import type { TurboModule } from 'react-native';
export interface Spec extends TurboModule {
    multiply(a: number, b: number): Promise<number>;
    startIdmetaFlow(flowId: string, userToken: string): void;
}
declare const _default: Spec;
export default _default;
//# sourceMappingURL=NativeIdmetaReactNative.d.ts.map