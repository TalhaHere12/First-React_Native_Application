import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Create from './src/screen/Create';
import AllItems from './src/screen/AllItems';
import LowStock from './src/screen/LowStock';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="AllItems" component={AllItems} />
        <Stack.Screen name="LowStock" component={LowStock} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
