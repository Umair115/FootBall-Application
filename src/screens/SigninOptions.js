import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Button, Input, CheckBox, checked, placeholder, Select, SelectItem } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import LinearGradientButton from '../components/LinearGradientButton'
import styles from '../theme'

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
          <LinearGradientButton title="Coach" onPress={() => navigation.navigate('Profile')} />
        </Column>
      </Row>
      <Row style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Column>
          <LinearGradientButton title="Team" onPress={() => navigation.navigate('Profileteam')} />
        </Column>
      </Row>
      <Row style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Column style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={styles.paragraph}>OR</Text>
        </Column>
      </Row>
      <Row style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
        <Column>
          <LinearGradientButton title="Player" onPress={() => navigation.navigate('Tablesteam')} />
        </Column>
      </Row>
    </Container>
  );
}
