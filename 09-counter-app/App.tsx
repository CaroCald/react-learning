import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Fab from './components/FAB';

export default function App() {

  const [count, setcount] = useState(10)


  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>


      <Fab label="+1"
        onPress={() => setcount(count + 1)}
        onLongPress={() => setcount(0)}
      />

      <TouchableOpacity onPress={() => setcount(count - 1)}>
        <Text>Decrement</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textHuge: {
    fontSize: 50,
    fontWeight: 'bold'
  },

});

