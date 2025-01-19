import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Correct import

const App = () => {
  return (
    <View style={styles.container}>
      <Icon name="facebook" size={50} color="#3b5998" /> {/* Facebook Icon */}
      <Text style={styles.text}>My component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Barlow-BlackItalic', // Custom font name
    fontSize: 18,
  },
});

export default App;
