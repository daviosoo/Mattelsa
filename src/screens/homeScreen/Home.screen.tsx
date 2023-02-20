//@ts-nocheck

import React, { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
  Alert,
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Accordion from 'react-native-collapsible/Accordion';
import RabbitLogo from './../../assets/RabbitLogo.svg';
import InstagramLogo from './../../assets/InstagramMobile.svg';
import FacebookLogo from './../../assets/FacebookMobile.svg';
import SpotifyLogo from './../../assets/SpotifyMobile.svg';
import TwitterLogo from './../../assets/TwitterMobile.svg';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function HomeScreen({navigation}): JSX.Element {
  const [activeSections, setActiveSections] = useState([]);

  const SECTIONS = [
    {
      title: 'CONTACTO',
      content: (
        <>
          <View style={styles.wppNumber}>
            <FontAwesomeIcon
              name="whatsapp"
              size={20}
              color={'gray'}
              style={{ marginRight: 3 }}
            />
            <Text style={styles.footerItem}>300 507 10 00</Text>
          </View>
          <Text style={styles.footerItem}>
            <Text style={{ fontWeight: 'bold' }}>PBX:</Text> 01 8000 41 37 57
          </Text>
          <Text style={styles.footerItem}>Escribenos</Text>
        </>
      ),
    },
    {
      title: 'QUIENES SOMOS',
      content: (
        <>
          <Text style={styles.footerItem}>Cultura</Text>
          <Text style={styles.footerItem}>Trabaja aquí</Text>
          <Text style={styles.footerItem}>La vida en Mattelsa</Text>
          <Text style={styles.footerItem}>Art Series & Friends</Text>
        </>
      ),
    },
    {
      title: 'AYUDA',
      content: (
        <>
          <Text style={styles.footerItem}>Envíos</Text>
          <Text style={styles.footerItem}>Cambios y garantías</Text>
          <Text style={styles.footerItem}>Preguntas frecuentes</Text>
        </>
      ),
    },
  ];

  const _renderHeader = (
    section: { title: string; content: JSX.Element },
    i: number,
    isActive: boolean,
  ) => {
    return (
      <View style={styles.containerHeaderFooter}>
        <Text style={styles.footerHeader}>{section.title}</Text>
        <EntypoIcon
          name={isActive ? 'chevron-small-up' : 'chevron-small-down'}
          size={30}
          style={styles.iconHeaderFooter}
          color={'gray'}
        />
      </View>
    );
  };

  const _renderContent = (section: { title: string; content: JSX.Element }) => {
    return <View style={styles.containterItemFooter}>{section.content}</View>;
  };

  const _updateSections = (activeSections: any) => {
    setActiveSections(activeSections);
  };

  const backgroundStyle = {
    backgroundColor: Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        style={backgroundStyle}>
        <View style={[styles.containerImage, styles.imgSection]}>
          <ImageBackground
            source={require('./../../assets/ppaldesktop30012023.jpeg')}
            resizeMode={'cover'}
            style={styles.image}>
            <View style={styles.containerButtons}>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() =>
                  navigation.navigate('Products', { section: 'hombre' })
                }>
                <View style={styles.button}>
                  <Text style={styles.textButton}>hombre</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor={'transparent'}
                onPress={() =>
                  navigation.navigate('Products', { section: 'mujer' })
                }>
                <View style={styles.button}>
                  <Text style={styles.textButton}>mujer</Text>
                </View>
              </TouchableHighlight>
            </View>
          </ImageBackground>
        </View>

        <TouchableHighlight
          style={styles.imgSection}
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('Products', { section: 'Buzos' })}>
          <View>
            <AutoHeightImage
              source={require('./../../assets/01buzosm30012023.jpeg')}
              width={windowWidth}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.imgSection}
          underlayColor={'transparent'}
          onPress={() => navigation.navigate('Products', { section: 'Jeans' })}>
          <View>
            <AutoHeightImage
              source={require('./../../assets/02jeansh30012023.jpeg')}
              width={windowWidth}
            />
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={styles.imgSection}
          underlayColor={'transparent'}
          onPress={() =>
            navigation.navigate('Products', { section: 'Especial graficos' })
          }>
          <View>
            <AutoHeightImage
              source={require('./../../assets/03graficosh30012023.jpeg')}
              width={windowWidth}
            />
          </View>
        </TouchableHighlight>

        <View style={styles.footerContainer}>
          <View style={styles.rabbitLogo}>
            <RabbitLogo width={40} height={40} />
          </View>

          <Accordion
            sections={SECTIONS}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
            underlayColor={'white'}
            containerStyle={{ width: '100%' }}
          />

          <View style={{ width: '100%' }}>
            <View style={styles.containerHeaderFooter}>
              <Text style={[styles.footerHeader, { paddingTop: 25 }]}>
                SÍGUENOS
              </Text>
            </View>
            <View style={styles.containerNetworks}>
              <InstagramLogo width={25} height={25} />
              <FacebookLogo width={25} height={25} />
              <SpotifyLogo width={25} height={25} />
              <TwitterLogo width={25} height={25} />
            </View>
          </View>

          <View style={styles.containerHeaderFooter}>
            <View style={{ paddingVertical: 35 }}>
              <Text
                style={[styles.footerItem, { fontSize: 16, marginBottom: 20 }]}>
                Términos y Condiciones
              </Text>
              <Text
                style={[styles.footerItem, { fontSize: 16, marginBottom: 20 }]}>
                Política de Privacidad
              </Text>
              <Text
                style={[styles.footerItem, { fontSize: 16, marginBottom: 20 }]}>
                Superintendencia de Industrua y Comercio
              </Text>
              <Text
                style={[
                  styles.footerItem,
                  {
                    color: 'black',
                    fontWeight: 'bold',
                    marginBottom: 0,
                    fontSize: 14,
                  },
                ]}>
                © 2023 Mattelsa S.A.S
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    width: windowWidth,
    height: windowHeight * 0.8,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerButtons: {
    width: windowWidth * 0.6,
  },
  button: {
    borderWidth: 4,
    borderColor: 'white',
    paddingVertical: 10,
    marginBottom: 25,
    borderRadius: 5,
  },
  textButton: {
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imgSection: {
    marginBottom: 5,
  },
  rabbitLogo: {
    paddingTop: 20,
    paddingBottom: 25,
  },
  separatorFooter: {
    width: '100%',
    height: 0.5,
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeaderFooter: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e4e4e4',
  },
  footerHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 20,
    color: 'black',
  },
  iconHeaderFooter: { position: 'absolute', right: 10, top: 15 },
  containterItemFooter: {
    marginBottom: 20,
  },
  wppNumber: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerItem: {
    textAlign: 'center',
    fontSize: 16,
    color: 'gray',
    marginBottom: 15,
  },
  containerNetworks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: windowWidth * 0.225,
    marginBottom: 30,
  },
});

export default HomeScreen;
