
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNIdmetaReactNativeSpec.h"

@interface IdmetaReactNative : NSObject <NativeIdmetaReactNativeSpec>
#else
#import <React/RCTBridgeModule.h>

@interface IdmetaReactNative : NSObject <RCTBridgeModule>
#endif

@end
