@import Flutter;
@import UIKit;
#import "IdmetaReactNative.h"

static FlutterEngine *_flutterEngine = nil;
static NSString *const CHANNEL = @"com.idmetareactnative/data";

@implementation IdmetaReactNative

RCT_EXPORT_MODULE()

+ (void)initWithFlutterEngine:(FlutterEngine * _Nonnull)flutterEngine {
    _flutterEngine = flutterEngine;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

// Remove this `init` function if you want to provide `flutterEngine` from host app's AppDelegate
- (instancetype)init {
    self = [super init];
    if (self) {
        // Init Flutter Engine
        self.flutterEngine = [[FlutterEngine alloc] initWithName:@"io.flutter" project:nil];
        [self.flutterEngine runWithEntrypoint:nil];
        [GeneratedPluginRegistrant registerWithRegistry:self.flutterEngine];
    }
    return self;
}

RCT_EXPORT_METHOD(startIdmetaFlow:(NSString *)flowId userToken:(NSString *)userToken) {
    dispatch_async(dispatch_get_main_queue(), ^{
        FlutterViewController *flutterViewController;
        if (self.flutterEngine == nil && _flutterEngine == nil) {
            flutterViewController = [[FlutterViewController alloc] initWithProject:nil nibName:nil bundle:nil];
        } else {
            FlutterEngine *fe = self.flutterEngine == nil ? _flutterEngine : self.flutterEngine;
            flutterViewController = [[FlutterViewController alloc] initWithEngine:fe nibName:nil bundle:nil];
        }

        // Set up the MethodChannel to pass the flowId and userToken
        FlutterMethodChannel* channel = [FlutterMethodChannel
            methodChannelWithName:CHANNEL
                  binaryMessenger:flutterViewController.binaryMessenger];
        [channel setMethodCallHandler:^(FlutterMethodCall* call, FlutterResult result) {
            if ([call.method isEqualToString:@"getData"]) {
                NSDictionary *data = @{
                    @"flowId": flowId,
                    @"userToken": userToken
                };
                result(data);
            } else {
                result(FlutterMethodNotImplemented);
            }
        }];

        // Present the Flutter view controller
        [flutterViewController setModalPresentationStyle:UIModalPresentationFullScreen];
        UIViewController *rootController = UIApplication.sharedApplication.delegate.window.rootViewController;
        [rootController presentViewController:flutterViewController animated:YES completion:nil];
    });
}

@end
