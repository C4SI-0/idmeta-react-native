import { StyleSheet, View, Text, Pressable } from 'react-native';
import { startIdmetaFlow } from 'idmeta-react-native';

export default function App() {
  const handlePress = () => {
    startIdmetaFlow('144', 'Bearer 17|PnvZiUqyZmUy5TxiowXxyFKGTLYmvIUA3a7eYPZp13e3c764');
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>Start Flutter</Text>
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
