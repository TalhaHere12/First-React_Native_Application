import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'; // FontAwesome Icon Component
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons'; 

const App = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon={faMugSaucer} size={50} color="#3b5998" /> {/* Icon Display */}
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
