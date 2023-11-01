import React, { useState } from 'react';
import {StyleSheet} from 'react-native';
import { Layout, Text, Button, Input, Select, SelectGroup, SelectItem, Icon } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import LinearGradientButton from '../components/LinearGradientButton'
import styles from '../theme'
import themecolor from '../themecolors';

export default Login = ({navigation}) => {
  
  const EmailIcon = (props) => (
    <Icon name='close-circle-outline' {...props} />
  )

  const PasswordIcon = (props) => (
    <Icon name='eye-off-outline' {...props} />
  )

  return (
    <Container>
      <H2 >Sign In To FLETL BaseBall</H2>
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
            placeholder='Enter Password'
            accessoryRight={PasswordIcon}
            />
        </Column>
      </Row>
      <Row>
        <Column style =  {{flex : 1}}>
          <Text onPress={() => navigation.navigate('RecoverPassword')} 
           style={[styles.paragraph,{color: '#CCCCCC',marginBottom:10,fontWeight:'bold',textAlign : 'right'}]}> Recover Password? </Text>
        </Column>
      </Row>

      <Row>
        <Column>
            <LinearGradientButton title="Sign In"
                onPress={() => navigation.navigate('OTP',{otpType:'signin'})}
          />
        </Column>
      </Row>
      <Row style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Column style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' ,marginTop:200}}> 
          <P>
            If you don't have an account you can?{' '}
            <Text  onPress={() => navigation.navigate('Register')} 
            style={[styles.text,{color: themecolor.primaryColor,fontWeight:'bold'}]}>
              Register
            </Text>
          </P>
        </Column>
      </Row>
    </Container>
  );
}