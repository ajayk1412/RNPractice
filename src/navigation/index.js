import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../containers/Home';
import UseImperativeHandle from '../containers/UseImperativeHandle';
import FloatingHearts from '../containers/FloatingHearts';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FloatingHearts">
        <Stack.Screen
          name="FloatingHearts"
          component={FloatingHearts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UseImperative"
          component={UseImperativeHandle}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
