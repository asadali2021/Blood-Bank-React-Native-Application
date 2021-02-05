import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import AppCamera from './Camera'


const Stack = createStackNavigator();
function AppNavigation (){
    return(
        <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
        <Stack.Screen name="AppCamera" component={AppCamera} />
       



      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigation;