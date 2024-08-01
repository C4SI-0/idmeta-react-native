
package com.idmetareactnative;

import android.app.Activity;
import android.content.Intent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;

public class IdmetaReactNativeModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;

    // Constructor
    public IdmetaReactNativeModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    // Module name in React Native
    @Override
    public String getName() {
        return "IdmetaReactNativeModule";
    }

    // Custom method to start FlutterActivity
    @ReactMethod
    public void startIdmetaFlow(String flowId, String userToken) {
        final Activity currentActivity = getCurrentActivity();
        if (currentActivity != null) {
            UiThreadUtil.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    Intent intent = new Intent(currentActivity, FlutterStarterActivity.class);
                    intent.putExtra("flowId", flowId);
                    intent.putExtra("userToken", userToken);
                    currentActivity.startActivity(intent);
                }
            });
        }
    }
}
