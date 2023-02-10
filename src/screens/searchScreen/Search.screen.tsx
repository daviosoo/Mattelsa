import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';


function SearchScreen(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: Colors.white,
          }}>
          <Text> Search </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SearchScreen;
