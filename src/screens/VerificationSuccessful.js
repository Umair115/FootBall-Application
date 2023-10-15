import React from 'react';
import {StyleSheet, Image } from 'react-native';
import {Layout, Text, Button, Input , CheckBox , checked  ,placeholder , Select, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import styles from '../theme'
import themecolor from '../themecolors';
import LinearGradientButton from '../components/LinearGradientButton'

export default VerificationSuccessful = ({navigation, route}) => {
  const [otpType, setOtpType] = React.useState(route.params.otpType)
 
  return (
    <Container>
      <Row >
        <Column>
            <Image
                source={require('../assets/images/Illustration1.png')} 
                style={{ width: 400, height: 300, alignSelf: 'center', top:30 }}
                resizeMode="cover"
            />
        </Column>
      </Row>
      <Row style={{flexDirection:'col'}}>
        <Text style={styles.heading}>{otpType == 'signup' ? "Sign Up" : 'Sign In'}</Text>
        <Text style={styles.heading}>VerificationSuccessful</Text>
        <Text>OTP verification Completed</Text>
        <Text>Click the button below to Continue Forward</Text>
      </Row>
      <Row style={{flexDirection:'col'}}>
      </Row>
      <Row style={{flex:0.4,marginTop:80}}>
        <Column style={{flex: 1}}>
       <LinearGradientButton  title="Continue" onPress={()=>{navigation.navigate('SigninOption')}}/>
       </Column>
      </Row>

    </Container>
  );
}
