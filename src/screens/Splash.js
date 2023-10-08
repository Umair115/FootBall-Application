import React from 'react';
import {Layout, Text, Button, Input , Icon, Spinner} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { Image, StyleSheet, View } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import Swiper from 'react-native-swiper';
import LocalStorage from '../services/LocalStorage';

const AppIntroSlider = ({ images, navigation }) => {
  const [showNav, setShowNav] = React.useState(true)
  return (
    <Swiper style={styles.wrapper} showsButtons={false} onIndexChanged={async (index) => {if (index == 7) {await LocalStorage.setData('showSlider',"false"); navigation.navigate("SignupOption")} }} loop={false} showsPagination={true} dot={showNav ? <View style={styles.dot} /> : <></>} activeDot={showNav ? <View style={styles.activeDot} /> : <></>}>
      {images.map((image, index) => (
        <Layout key={index} style={styles.slide}>
          <Image source={image} style={styles.image} />
        </Layout>
      ))}
    </Swiper>
  );
};

const GetStarted = ({navigation}) => {
  return(
    <Container>
    
      <Row style={{flex: .7, alignItems: 'center'}}>
          <Column>
              <Image
                  source={require('../assets/images/fletl_logo.png')} // Adjust path as needed
                  style={{ width: 200, height: 200, alignSelf: 'center' }}
                  resizeMode="contain"
              />
          </Column>
      </Row>

      <Row style={{flex: .3, alignItems: 'center'}}>
        <Column style={{flex:1.8}}/>
        <Column style={{flex:1}}><Spinner></Spinner></Column>
        <Column style={{flex:1}}/>
      </Row>

    </Container>

  )
}

export default Splash = ({navigation}) => {
  const [showSlider, setShowSlider] = React.useState(true);

  const checkSlider = async () => {
    var asyncSliderCheck = await LocalStorage.getData('showSlider');
    if (asyncSliderCheck == 'false') {
      setShowSlider(false)
    }
  }
  
  React.useEffect(()=>{
    checkSlider()
  },[])

  const images = [
    require('../assets/images/backdrop.png'),
    require('../assets/images/backdrop1.png'),
    require('../assets/images/backdrop2.png'),
    require('../assets/images/backdrop3.png'),
    require('../assets/images/backdrop4.png'),
    require('../assets/images/backdrop5.png'),
    require('../assets/images/backdrop6.png'),
    require('../assets/images/backdrop7.png'),
  ];
  return (
      showSlider ? <AppIntroSlider images={images} navigation={navigation} /> : <GetStarted navigation={navigation}/>
      );
}

const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
  },
  image: {},
  dot: {
    backgroundColor: '#D9D9D9', // Inactive dot color
    width: 20, // Adjust the width as needed
    height: 5, // Adjust the height as needed
    borderRadius: 5, // Make it a circle
    marginHorizontal: 2, // Adjust the spacing between dots
  },
  activeDot: {
    backgroundColor: '#CA158B', // Active dot color
    width: 25, // Adjust the width as needed
    height: 10, // Adjust the height as needed
    borderRadius: 5, // Make it a circle
    marginHorizontal: 2, // Adjust the spacing between dots
  },
});