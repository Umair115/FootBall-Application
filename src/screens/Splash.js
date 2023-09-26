import React from 'react';
import {Layout, Text, Button, Input , Icon} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { Image } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default Splash = ({navigation}) => {
  return (
    <Container>
      <Row style = {{flex : .1}}>
        <Column>
        <Text style = {{textAlign : 'right' , color : 'purple'}}>Login</Text>
        </Column>
      </Row>
    
        <Row style={{flex: .7, alignItems: 'center'}}>
            <Column>
                <Image
                    source={require('../assets/images/own_logo.png')} // Adjust path as needed
                    style={{ width: 240, height: 240, alignSelf: 'center' }}
                    resizeMode="contain"
                />
            </Column>
        </Row>

      <Row style={{flex: .1}}>
     
        <Column style={{flex: 1}}>
            <Button onPress={() => navigation.navigate('Register')}>Signup</Button>
        </Column>
      </Row>
      <Row style= {{flex : .2}}>
      <Column style={{flex: .5}}>
            <Button appearance='outline' style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Login')}>Google</Button>
        </Column>
        <Column style={{flex: .5}}>
            <Button appearance='outline' style={{backgroundColor: 'transparent'}} onPress={() => navigation.navigate('Login')}>
            Facebook</Button>
        </Column>
      </Row>
    </Container>
  );
}