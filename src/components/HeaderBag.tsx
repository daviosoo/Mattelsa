import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//@ts-ignore
import ShoppingBag from './../assets/ShoppingBag.svg';

function BagButton() {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Bag!')}>
      <View style={styles.imageContainer}>
        <ShoppingBag width={30} height={30} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    backgroundColor: 'white',
    marginRight: 20,
    paddingBottom: 10
  },
});
export default BagButton;
