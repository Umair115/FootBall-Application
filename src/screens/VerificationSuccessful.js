import React from 'react';
import {StyleSheet, Image } from 'react-native';
import {Layout, Text, Button, Input , CheckBox , checked  ,placeholder , Select, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';

export default VerificationSuccessful = ({navigation, route}) => {
  const [otpType, setOtpType] = React.useState(route.params.otpType)
 
  return (
    <Container>
      <Row style={{flex:0.5}}>
        <Column>
            <Image
                source={require('../assets/images/fletl_logo.png')} // Adjust path as needed
                style={{ width: 300, height: 300, alignSelf: 'center', top:30 }}
                resizeMode="cover"
            />
        </Column>
      </Row>
      <Row style={{flex:0.1, flexDirection:'col'}}>
        <Text>{otpType == 'signup' ? "Sign Up" : 'Sign In'}</Text>
        <Text>Enter Your OTP To Continue</Text>
      </Row>
      <Row style={{flex:0.3, flexDirection:'col'}}>
        {/* <Input placeholder='Enter OTP Here'></Input>
        <Button>Verify OTP</Button> */}
      </Row>
      <Row style={{flex:0.1, justifyContent:'center', alignItems:'center'}}>
       <Button onPress={()=>{navigation.navigate('SigninOption')}}>Continue</Button>
      </Row>

    </Container>
  );
}
