import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Splash from './splash';
import Login from './login';
import Page from './component/page'


//import {RouteContext} from './helper/route_context'

const App = () => {

  const Stack = createStackNavigator();

  const AuthStack = () => (
    <Stack.Navigator headerMode={null}>
     <Stack.Screen name="Splash" component={Splash} />
     <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Page" component={Page} />
    
      
    </Stack.Navigator>
  );

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};
export default App;
