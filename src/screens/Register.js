import React from 'react';
import {StyleSheet } from 'react-native';
import {Layout, Text, Button, Input , CheckBox , checked  ,placeholder , Select, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';

export default Register = ({navigation}) => {
 
  return (
    <Container>
      <H2>Signup</H2>
      <Row>
        <Column style={{flex: .5}}>
            <Label>First Name</Label>
            <Input
            placeholder='John' />
        </Column>

        <Column style={{flex: .5}}>
            <Label>Last Name</Label>
            <Input
            placeholder='Doe' />
        </Column>
        
      </Row>

      <Row>
        <Column style={{flex: .5}}>
            <Label>Country</Label>
            <Select>
        <SelectItem title='Option 1' />
        <SelectItem title='Option 2' />
        <SelectItem title='Option 3' />
             </Select>
        </Column>

        <Column style={{flex: .5}}>
            <Label>Phone Number</Label>
            <Input
            placeholder='889466646' />
        </Column>
        
      </Row>
      <Row>
        <Column style={{flex: 1}}>
        <Label>Email</Label>
            <Input 
             placeholder='johndoe@gmail.com'
           />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
        <Label>Password</Label>
        <Input
         secureTextEntry={true}
        placeholder='Enter 6 characters or more' 
           />
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
        <Label>Enter Referal Code</Label>
            <Input 
            placeholder='Enter Referal Code or more(Optional)'
           />
        </Column>
      </Row>
      <Row>
        <Column style = {{flex : 1}}>
        <CheckBox
        status='basic'
        checked={true}
        
      >
        <P>By Continuing you agree to our </P><Text style = {{color : 'red' , textDecorationLine : 'underline'}}>Terms of services</Text>
      </CheckBox>
        </Column>
      </Row>
      <Row>
        <Column style={{flex: 1}}>
            <Button
                onPress={() => navigation.navigate('Login')}
            >
                <Text>SIGN UP</Text>
            </Button>
        </Column>
      </Row>

      <Row>
        <Column style={{flex: 1, alignItems: 'center'}}>
            <P>Already Have An Account? <Text onPress={() => navigation.navigate('Login')} style = {{color : 'blue'}}>Login</Text> 

            </P>
        </Column>
      </Row>
    </Container>
  );
}
