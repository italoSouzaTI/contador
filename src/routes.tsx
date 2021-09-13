import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './Home';
import History from './History';

const Stack = createStackNavigator();
const src: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="History" component={History} />
    </Stack.Navigator>
  );
};

export default src;
