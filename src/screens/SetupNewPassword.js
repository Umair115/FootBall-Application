import React, { useState } from 'react';
import {StyleSheet,View} from 'react-native';
import { Layout, Text, Button, Input, Select, SelectGroup, SelectItem, Icon } from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';
import LinearGradientButton from '../components/LinearGradientButton'
import styles from '../theme'
import themecolor from '../themecolors';

export default SetupNewPassword = ({navigation, }) => {

    const PasswordIcon = (props) => (
        <Icon name='eye-off-outline' {...props} />
      )

    return (
        <Container>
            <H2 >Set New Password</H2>
            <Row>
        <Column style={{flex: 1}}>
            <Input
            style={styles.inputField} 
            secureTextEntry={true}
            placeholder='********'
            accessoryRight={PasswordIcon}
            />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
            <Input
            style={styles.inputField} 
            secureTextEntry={true}
            placeholder='********'
            accessoryRight={PasswordIcon}
            />
        </Column>
      </Row>

            <Row>
                <Column>
                    <LinearGradientButton title="Confirm Password Reset"
                        onPress={() => navigation.navigate('ResetPassword')}
                    />
                </Column>
            </Row>
            <Row>
                <Column style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC', marginRight: 10 }} />
                    <Text style={[styles.paragraph, { color: '#CCCCCC', marginBottom: 10, fontWeight: 'bold', textAlign: 'center' }]}>
                        Reset Password
                    </Text>
                    <View style={{ flex: 1, height: 1, backgroundColor: '#CCCCCC', marginLeft: 10 }} />
                </Column>
            </Row>


            <Row style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Column style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                    <P>
                        Enter new password for your account{' '}
                    </P>
                </Column>
            </Row>
        </Container>

    )
}
