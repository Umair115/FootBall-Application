import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Button, Input, CheckBox, checked, placeholder, Select, SelectItem } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import LinearGradientButton from '../components/LinearGradientButton'
import styles from '../theme'
import { TouchableOpacity } from 'react-native';


export default SignupOptions = ({ navigation }) => {

  return (
    <Container>
      <Row style={{ flex: 0.6 }}>
        <Column>
          <Image
            source={require('../assets/images/fletl_logo.png')}
            style={{ width: 300, height: 300, alignSelf: 'center', top: 30 }}
            resizeMode="cover"
          />
        </Column>
      </Row>
      <Row style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Column>
          <LinearGradientButton title="Create Account" onPress={() => navigation.navigate('Register')} />
        </Column>
      </Row>
      <Row style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Column>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>
        </Column>
      </Row>
      <Row style={{ flex: 0.07, justifyContent: 'center', alignItems: 'center' }}>
        <Column style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.paragraph}>OR</Text>
        </Column>
      </Row>

      <Row style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Column>
          <Button
            style={styles.exploreButton}
            appearance="filled" 
            status="basic"
          >
            Explore ScoreCard
          </Button>
        </Column>
      </Row>
    </Container>
  );
}
