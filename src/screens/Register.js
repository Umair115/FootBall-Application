import React from 'react';
import {StyleSheet } from 'react-native';
import {Layout, Text, Button, Input , CheckBox , checked  ,placeholder , Select, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';

export default Register = ({navigation}) => {
 
  return (
    <Container>
      <H2>Sign Up To FLETL Baseball</H2>
      <Row>
        <Column style={{flex: 1}}>
            <Input 
             placeholder='Enter Full Name'
           />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
        <Input
          placeholder='Enter Email' 
           />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
          <Input 
          secureTextEntry={true}
          placeholder='*********'
          />
        </Column>
      </Row>
      
      <Row>
        <Column style={{flex: 1}}>
            <Button
                onPress={() => navigation.navigate('OTP',{otpType:'signup'})}
            >
                <Text>SIGN UP</Text>
            </Button>
        </Column>
      </Row>

      <Row>
        <Column style={{flex: 1, alignItems: 'center'}}>
            <P>Already Have An Account? <Text onPress={() => navigation.navigate('Login')} style = {{color : 'blue'}}>Login</Text> 

            </P>
        </Column>
      </Row>
    </Container>
  );
}
