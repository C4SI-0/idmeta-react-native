import { NativeModules } from 'react-native';

const { IdmetaReactNativeModule } = NativeModules;

// Method to start the Flutter flow
const startIdmetaFlow = (flowId, userToken) => {
    if (!flowId || !userToken) {
        console.error('Both flowId and userToken are required parameters.');
        return;
    }
    IdmetaReactNativeModule.startIdmetaFlow(flowId, userToken);
};

// Export the module functionality
export default {
    startIdmetaFlow,
};
