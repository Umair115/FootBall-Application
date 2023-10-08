import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button, Input , Select, SelectGroup, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';


export default Login = ({navigation}) => {
  return (
    <Container>
      <H2>Sign In To FLETL Baseball</H2>
      
      <Row>
        <Column style={{flex: 1}}>
            <Input secureTextEntry={true}
            placeholder='Enter Email'  />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
            <Input secureTextEntry={true}
            placeholder='********'  />
        </Column>
      </Row>
      <Row>
        <Column style =  {{flex : 1}}>
          <Text style = {{color : 'blue' , textAlign : 'right'}}> Forgot Password? </Text>
        </Column>
      </Row>

      <Row>
        <Column>
            <Button
                onPress={() => navigation.navigate('OTP',{otpType:'signin'})}
            >
                <Text>Login</Text>
            </Button>
        </Column>
      </Row>

      <Row>
        <Column style={{flex: 1, alignItems: 'center'}}>
            <P>New User? <Text onPress={() => navigation.navigate('Register')} style ={{color : 'blue'}}>Sign up</Text>

            </P>
        </Column>
      </Row>
    </Container>
  );
}