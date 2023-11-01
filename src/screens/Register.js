import React from 'react';
import {StyleSheet } from 'react-native';
import {Layout, Text, Button, Input , Icon,CheckBox , checked  ,placeholder , Select, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import LinearGradientButton from '../components/LinearGradientButton'
import styles from '../theme'
import themecolor from '../themecolors';

export default Register = ({navigation}) => {
  const EmailIcon = (props) => (
    <Icon name='close-circle-outline' {...props} />
  )

  const PasswordIcon = (props) => (
    <Icon name='eye-off-outline' {...props} />
  )

  return (
    <Container>
      <H2>Sign Up To FLETL Baseball</H2>
      <Row>
        <Column style={{flex: 1}}>
            <Input 
            style={styles.inputField}
             placeholder='Enter Full Name'
             accessoryRight={EmailIcon}
           />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
        <Input
         style={styles.inputField}
          placeholder='Enter Email' 
          accessoryRight={EmailIcon}
           />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
          <Input 
           style={styles.inputField}
          secureTextEntry={true}
          placeholder='*********'
          accessoryRight={PasswordIcon}
          />
        </Column>
      </Row>
      
      <Row>
        <Column style={{flex: 1}}>
            <LinearGradientButton title="Sign Up"
                onPress={() => navigation.navigate('OTP',{otpType:'signup'})}
           />
        </Column>
      </Row>
      <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Column style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' ,marginTop:150}}> 
          <P>
            If you have an account you can?{' '}
            <Text  onPress={() => navigation.navigate('Login')} 
            style={[styles.text,{color: themecolor.primaryColor,fontWeight:'bold'}]}>
              Login here!
            </Text>
          </P>
        </Column>
      </Row>
    </Container>
  );
}
