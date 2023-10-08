import React from 'react';
import {StyleSheet, Image } from 'react-native';
import {Layout, Text, Button, Input , CheckBox , checked  ,placeholder , Select, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';

export default SignupOptions = ({navigation}) => {
 
  return (
    <Container>
      <Row style={{flex:0.6}}>
        <Column>
            <Image
                source={require('../assets/images/fletl_logo.png')} // Adjust path as needed
                style={{ width: 300, height: 300, alignSelf: 'center', top:30 }}
                resizeMode="cover"
            />
        </Column>
      </Row>
      <Row style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
        <Column>
            <Button onPress={()=>navigation.navigate('Register')}>Create Account</Button>
        </Column>
      </Row>
      <Row style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
        <Column>
            <Button onPress={()=>navigation.navigate('Login')}>Sign In</Button>
        </Column>
      </Row>
      <Row style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
        <Column style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text>OR</Text>
        </Column>
      </Row>
      <Row style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
        <Column>
            <Button>Explore Scorecard</Button>
        </Column>
      </Row>
    </Container>
  );
}
