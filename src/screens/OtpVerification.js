import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, View, ImageBackground } from 'react-native';
import { Text } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import LinearGradientButton from '../components/LinearGradientButton';
import styles from '../theme';
import themecolor from '../themecolors';

const OtpVerification = ({ navigation, route }) => {
  const [otpType, setOtpType] = useState(route.params.otpType);
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);

  const handleOtpInputChange = (index, value) => {
    const updatedOtpDigits = [...otpDigits];
    updatedOtpDigits[index] = value;

    setOtpDigits(updatedOtpDigits);

    if (index === 3 && value !== '') {
      const otpCode = updatedOtpDigits.join('');
      console.log('Entered OTP:', otpCode);

      navigation.navigate('VerificationSuccessful', { otpType, otpCode });
    }
  };
  return (
    <Container>
      <Row>
        <Column>
          <Image
            source={require('../assets/images/Illustration1.png')}
            style={styles.illustrationImage}
            resizeMode="cover"
          />
        </Column>
      </Row>

      <Row style={styles.IllustrationText}>
        <Text style={[styles.heading, { marginBottom: 5 }]}>
          {otpType == 'signup' ? 'Sign Up' : otpType === 'recover' ? 'Recover Password' : 'Sign In'}
        </Text>
        <Text>Please Type OTP to continue.</Text>
        <Text>Enter Your OTP Code here</Text>
      </Row>

      <Row style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        {otpDigits.map((digit, index) => (
          <View key={index} style={styles.otpDigitContainer}>
            <TextInput
              style={styles.otpDigitText}
              value={digit}
              onChangeText={(text) => handleOtpInputChange(index, text)}
              keyboardType="numeric"
            />
          </View>
        ))}
      </Row>


      <Row>
        <Column style={{ flex: 1 }}>
          <LinearGradientButton title="Verify OTP" onPress={() => navigation.navigate('OTPConfirmation', { otpType })} />
        </Column>
      </Row>

      <Row style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.text}>I did not receive the code</Text>
        <Text
          style={[styles.text, { color: themecolor.primaryColor, fontWeight: 'bold' }]}
          onPress={() => {
            console.log('resend code pressed');
          }}
        >
          Resend CODE
        </Text>
      </Row>
    </Container>
  );
};

export default OtpVerification;
