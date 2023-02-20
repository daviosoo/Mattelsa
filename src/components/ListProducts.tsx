//@ts-nocheck
import React from 'react';
import { Dimensions, StyleSheet, Text, View, Image, Alert } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';
import AutoHeightImage from 'react-native-auto-height-image';

const windowWidth = Dimensions.get('window').width;

function ProductCard({ item, navigation }): JSX.Element {
  return (
    <TouchableHighlight
      style={{ alignItems: 'center' }}
      underlayColor={'transparent'}
      onPress={() => Alert.alert(item.name)}>
      <View>
        <AutoHeightImage
          source={{
            uri: item.urlImage,
          }}
          width={windowWidth * 0.495}
        />
        <View style={{ paddingVertical: 20, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 16, color: '#484848', marginBottom: 3 }}>
            {item.name}
          </Text>
          {item.salePrice ? (
            <>
              <Text
                style={{ fontSize: 16, fontWeight: 'bold', color: '#19CD8C' }}>
                ${item.salePrice}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: '#b4b4b4',
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid',
                }}>
                ${item.price}
              </Text>
            </>
          ) : (
            <Text style={{ fontSize: 16, color: '#b4b4b4' }}>
              ${item.price}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

function ListProducts({ data ,navigation }): JSX.Element {
  return (
    <View style={styles.container}>
      <FlatGrid
        itemDimension={windowWidth * 0.495}
        data={data}
        renderItem={({ item }) => (
          <ProductCard item={item} navigation={navigation}/>
        )}
        maxItemsPerRow={2}
        spacing={0}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: 70,
  },
});
export default ListProducts;
