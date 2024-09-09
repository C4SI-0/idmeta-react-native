# idmeta-react-native

`idmeta-react-native` is a React Native library integrated with the Idmeta SDK, providing seamless integration and functionality for your React Native applications.

## Installation

To install the library, run:

```sh
npm install idmeta-react-native
```

## Android Setup

```js

To configure your Android project to use this library, add the following lines to your android/build.gradle

allprojects {
    repositories {
        maven {
            url uri("../../node_modules/idmeta-react-native/build/host/outputs/repo")
        }
        maven {
            url "https://storage.googleapis.com/download.flutter.io"
        }
    }
}
```


## Usage

```js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { startIdmetaFlow } from 'idmeta-react-native'; // Import the function directly

const App = () => {
  const flowId = 'your-flow-id';  // Replace with actual flowId
  const userToken = 'your-user-token';  // Replace with actual userToken

  const handleStartFlow = () => {
    startIdmetaFlow(flowId, userToken);
  };

  return (
    <View style={styles.container}>
      <Button title="Start Flow" onPress={handleStartFlow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

```




## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)