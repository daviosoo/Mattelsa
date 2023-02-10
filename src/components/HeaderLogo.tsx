import React from 'react';
import { SvgUri } from 'react-native-svg';
//@ts-ignore
import LogoMattelsa from './../assets/LogoMattelsa.svg';
import { StyleSheet, View } from 'react-native';

function HeaderLogo() {
  return (
    <View style={styles.logoContainer}>
      <LogoMattelsa width={150} height={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingBottom: 10,
  },
});

export default HeaderLogo;
