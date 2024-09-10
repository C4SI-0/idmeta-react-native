# idmeta-react-native

`idmeta-react-native` is a React Native library integrated with the Idmeta SDK, providing seamless integration and functionality for your React Native applications.

## Installation

To install the library, run:

```sh
npm install https://github.com/C4SI-0/idmeta-react-native.git
```

## Android Setup

```js


To configure your Android project to use this package, 

Open <host>\app\build.gradle

Add the following code.

allprojects {
    repositories {
        maven {
            url uri("../../node_modules/idmeta-react-native/android/build/host/outputs/repo")
        }
        maven {
            url "https://storage.googleapis.com/download.flutter.io"
        }
    }
}
```

## IOS Setup
```js
iOS
Add following to your Podfile:


require_relative ‘../node_modules/idmeta-react-native/ios/pods’
…
target ‘ReactNativeApp’ do
 …
 use_idmeta_rn!()
 …
end

```

## Usage

```js
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { startIdmetaFlow } from 'idmeta-react-native';

export default function App() {
  const handlePress = () => {
    startIdmetaFlow('Flow Id', 'Token Id');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Start Id Meta Flow</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#1abc9c',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

```




## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---