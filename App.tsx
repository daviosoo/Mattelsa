import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import AppTabs from './src/tabs/App.tabs';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}

export default App;
