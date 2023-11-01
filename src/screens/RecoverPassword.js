import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button, Input, Select, SelectGroup, SelectItem, Icon } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import LinearGradientButton from '../components/LinearGradientButton'
import styles from '../theme'
import { View } from 'react-native';
import themecolor from '../themecolors';


export default RecoverPassword = ({ navigation }) => {

    return (
        <Container>
            <H2 >Recover Password?</H2>
            <Row>
                <Column style={{ flex: 1 }}>
                    <Input
                        style={styles.inputField}
                        secureTextEntry={true}
                        placeholder='Enter Email' />
                </Column>
            </Row>

            <Row>
                <Column>
                    <LinearGradientButton title="Recover Password"
                        onPress={() => navigation.navigate('OTP', { otpType: 'recover' })}
                    />
                </Column>
            </Row>
            <Row>
                <Column style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC', marginRight: 10 }} />
                    <Text style={[styles.paragraph, { color: '#CCCCCC', marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }]}>
                        Recover Password
                    </Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC', marginLeft: 10 }} />
                </Column>
            </Row>


            <Row style={{justifyContent: 'center', alignItems: 'center' }}>
                <Column style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                    <P>
                        Enter your account email to recover your password{' '}
                    </P>
                </Column>
            </Row>
        </Container>
    );
}
