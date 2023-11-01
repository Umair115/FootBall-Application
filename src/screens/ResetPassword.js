import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Layout, Text, Button, Input, CheckBox, checked, placeholder, Select, SelectItem } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import styles from '../theme'
import themecolor from '../themecolors';
import LinearGradientButton from '../components/LinearGradientButton'

export default ResetPassword = ({ navigation, route }) => {

    return (
        <Container>
            <Row >
                <Column>
                    <Image
                        source={require('../assets/images/Illustration1.png')}
                        style={styles.illustrationImage}
                        resizeMode="cover"
                    />
                </Column>
            </Row>
            <Row style={styles.IllustrationText}>
                <Text style={[styles.heading, { marginBottom: 2 }]}>
                    Reset Password
                </Text>
                <Text style={[styles.heading, { marginBottom: 5 }]}>Successfully</Text>
                <Text>Click the button below to Continue Forward</Text>
            </Row>
            <Row style={{ flexDirection: 'col' }}>
            </Row>
            <Row style={{ flex: 0.4, marginTop: 150 }}>
                <Column style={{ flex: 1 }}>
                    <LinearGradientButton title="Continue" onPress={() => { navigation.navigate('SigninOption') }} />
                </Column>
            </Row>

        </Container>
    );
}
