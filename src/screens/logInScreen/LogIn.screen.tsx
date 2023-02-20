//@ts-nocheck
import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Alert,
  TextInput,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { regexValidate } from '../../utils/regexValidator';

function LogInScreen({ navigation }): JSX.Element {
  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  const initForm = {
    email: {
      value: '',
      isValid: false,
      color: '#BFBFBF',
    },
    password: {
      value: '',
      isValid: false,
      color: '#BFBFBF',
    },
  };

  const [loginForm, setLoginForm] = useState(initForm);

  const IsValidForm = () => {
    const login = Object.values(loginForm);
    const isValidEntries = login.every(p => p.isValid);

    return isValidEntries;
  };

  const onChangeEmail = v => {
    const isValid = regexValidate({
      regexp: /^\S+@\S+\.\S+$/,
      stringToValidate: v,
    });

    setLoginForm(s => ({
      ...s,
      email: {
        value: v,
        isValid,
        color: isValid ? 'green' : 'red',
      },
    }));
  };

  const onChangePassword = v => {
    const isValid = v !== '';

    setLoginForm(s => ({
      ...s,
      password: {
        value: v,
        isValid,
        color: isValid ? 'green' : 'red',
      },
    }));
  };

  return (
    <SafeAreaView style={[backgroundStyle, { height: '100%' }]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}>
        <TouchableHighlight
          onPress={() => navigation.navigate('More')}
          underlayColor={'transparent'}
          style={{
            paddingVertical: 15,
            marginTop: 10,
            paddingHorizontal: 20,
          }}>
          <AntDesignIcon name={'left'} size={26} color={'#484848'} />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => Alert.alert('Create account')}
          underlayColor={'transparent'}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          <Text
            style={{
              color: '#484848',
              fontSize: 18,
            }}>
            Crear cuenta
          </Text>
        </TouchableHighlight>
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 35,
            paddingVertical: 15,
            color: 'black',
            marginBottom: 20,
            fontWeight: 'bold'
          }}>
          Ingresa a tu cuenta
        </Text>

        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: loginForm.email.color,
            borderRadius: 10,
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              color: 'gray',
              fontSize: 18,
              padding: 15,
              width: '90%',
            }}
            placeholder="E-mail"
            placeholderTextColor={loginForm.email.color}
            onChangeText={onChangeEmail}
            value={loginForm.email.value}
            autoCapitalize={'none'}
          />
        </View>

        <View
          style={{
            width: '100%',
            borderWidth: 1,
            borderColor: loginForm.password.color,
            borderRadius: 10,
            marginBottom: 60,
          }}>
          <TextInput
            style={{
              color: 'gray',
              fontSize: 18,
              padding: 15,
              width: '90%',
            }}
            placeholder="Contraseña"
            placeholderTextColor={loginForm.password.color}
            onChangeText={onChangePassword}
            value={loginForm.password.value}
            autoCapitalize={'none'}
            secureTextEntry
          />
        </View>

        <TouchableHighlight
          style={{
            borderRadius: 10,
            backgroundColor: IsValidForm() ? '#484848' : '#BFBFBF',
            marginBottom: 10,
          }}
          disabled={!IsValidForm()}
          underlayColor={'transparent'}
          onPress={() => Alert.alert('Ingresar')}>
          <Text
            style={{
              textAlign: 'center',
              padding: 15,
              fontSize: 18,
              color: 'white',
            }}>
            Ingresar
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            borderRadius: 10,
          }}
          underlayColor={'transparent'}
          onPress={() => Alert.alert('Forgot')}>
          <Text
            style={{
              textAlign: 'center',
              padding: 10,
              fontSize: 16,
              color: '#484848',
              textDecorationLine: 'underline',
            }}>
            La olvidaste, cierto?
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

export default LogInScreen;
