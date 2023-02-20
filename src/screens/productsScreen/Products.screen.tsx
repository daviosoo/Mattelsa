//@ts-nocheck
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import ListProducts from '../../components/ListProducts';

const data = [
  {
    id: 1,
    name: 'Camiseta',
    price: '89.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/6/5/65304-2.jpg',
  },
  {
    id: 2,
    name: 'Camiseta',
    price: '59.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/1/71158-1.jpg',
  },
  {
    id: 3,
    name: 'Jog',
    price: '113.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/0/70025-1.jpg',
  },
  {
    id: 4,
    name: 'Chaqueta',
    price: '153.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/1/71143-1.jpg',
  },
  {
    id: 5,
    name: 'Camisa',
    price: '89.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/0/70547-1.jpg',
  },
  {
    id: 6,
    name: 'Jeans',
    price: '112.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/6/7/67636-1.jpg',
  },
  {
    id: 7,
    name: 'Polo',
    price: '79.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/0/70532-1.jpg',
  },
  {
    id: 8,
    name: 'Joggers',
    price: '104.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/6/9/69299-1.jpg',
  },
  {
    id: 9,
    name: 'Tank',
    price: '45.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/1/71139-1.jpg',
  },
  {
    id: 10,
    name: 'Shorts',
    price: '89.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/1/71169-1.jpg',
  },
  {
    id: 11,
    name: 'Pantalón',
    price: '113.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/7/0/70760-1.jpg',
  },
  {
    id: 12,
    name: 'Pantaloneta',
    price: '88.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/6/7/67735-1.jpg',
  },
  {
    id: 13,
    name: 'Buzo',
    price: '112.000',
    urlImage:
      'https://www.mattelsa.net/media/catalog/product/cache/25f4c2693a2e8545835ae720e71a1a77/6/9/69553-1.jpg',
  },
];

function ProductsScreen({ navigation, route }): JSX.Element {

  const {section} = route.params 

  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  return (
    <SafeAreaView style={[backgroundStyle, { height: '100%' }]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            paddingVertical: 15,
            textAlign: 'center',
            color: 'gray'
          }}>
          {section}
        </Text>
      </View>

      <ListProducts data={data} navgation={navigation} />
    </SafeAreaView>
  );
}

export default ProductsScreen;
