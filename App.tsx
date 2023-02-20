import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppTabs from './src/tabs/App.tabs';

function App(): JSX.Element {
  
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

export default App;
