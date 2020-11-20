import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import LandingPage from '../pages/Landing';
import GiveClassesPage from '../pages/GiveClasses';

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}> 
        <Screen name="Landing"  component={LandingPage} />
        <Screen name="GiveClasses"  component={GiveClassesPage} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;