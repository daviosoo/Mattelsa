import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Alert,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import EntypoIcon from 'react-native-vector-icons/Entypo';
//@ts-ignore
import ColombiaLogo from './../../assets/Colombia.svg'

import { Colors } from 'react-native/Libraries/NewAppScreen';

function MoreScreen(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  return (
    <SafeAreaView style={[backgroundStyle, { height: '100%' }]}>
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
            paddingVertical: 20,
            paddingHorizontal: 30,
          }}>
          <View
            style={{
              marginBottom: 20,
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: '#e4e4e4',
              width: '80%',
            }}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: 'bold',
              }}>
              Hola, bunny!
            </Text>
          </View>
          <View style={{ marginBottom: 30 }}>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={() => Alert.alert('man')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  paddingVertical: 15,
                }}>
                hombre
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={() => Alert.alert('mujer')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  paddingVertical: 15,
                }}>
                mujer
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={() => Alert.alert('cosas')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  paddingVertical: 15,
                }}>
                cosas
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={() => Alert.alert('activismo')}>
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: 'bold',
                  paddingVertical: 15,
                }}>
                activismo
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'white'}
              onPress={() => Alert.alert('sale')}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    paddingVertical: 15,
                    color: '#19CD8C',
                  }}>
                  sale
                </Text>
                <EntypoIcon
                  name={'chevron-small-right'}
                  size={35}
                  style={{ marginTop: 5 }}
                />
              </View>
            </TouchableHighlight>
          </View>

          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: '#e4e4e4',
              width: '100%',
            }}>
            <View style={{ marginTop: 30 }}>
              <TouchableHighlight
                underlayColor={'trasnparent'}
                onPress={() => Alert.alert('Ingresa')}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    paddingVertical: 15,
                  }}>
                  Ingresa
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'white'}
                onPress={() => Alert.alert('Tiendas')}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: 'bold',
                    paddingVertical: 15,
                  }}>
                  Tiendas
                </Text>
              </TouchableHighlight>

              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    paddingVertical: 15,
                  }}>
                  País de envío
                </Text>
                <TouchableHighlight
                  underlayColor={'transparent'}
                  onPress={() => Alert.alert('País')}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      borderWidth: 1,
                      borderColor: '#e4e4e4',
                      padding: 20,
                    }}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <ColombiaLogo width={25} height={25} />
                      <Text style={{ fontWeight: 'bold', marginLeft: 10, color:'gray' }}>Colombia | COP</Text>
                    </View>

                    <EntypoIcon name={'chevron-small-down'} size={30} color={'gray'}/>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default MoreScreen;
