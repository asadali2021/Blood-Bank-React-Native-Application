import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import About from './About';
import AppCamera from './Camera';
import Login from './Login';
import Signup from './Signup';
import Welcome from './Welcome';
import WelcomeData from './WelcomeData';

const Stack = createStackNavigator();

function AppNavigation (){
    return(
        <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="WelcomeData" component={WelcomeData} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="About" component={About} />
       
       



      </Stack.Navigator>
    </NavigationContainer>
    );
}

export default AppNavigation;