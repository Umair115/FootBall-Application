import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button, Input , Select, SelectGroup, SelectItem} from '@ui-kitten/components';
import { Column, Row, Container } from '../components/Grid';
import { H2, P, Label } from '../components/Typography';


export default Login = ({navigation}) => {
  return (
    <Container>
      <H2>Login</H2>
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
            placeholder='889466646'
            />
        </Column>
        
      </Row>

      <Row>
        <Column style={{flex: 1}}>
            <Label>Password</Label>
            <Input secureTextEntry={true}
            placeholder='Enter 6 characters or more'  />
        </Column>
      </Row>
      <Row>
        <Column style =  {{flex : 1}}>
          <Text style = {{color : 'blue' , textAlign : 'right'}}> Forgot Password? </Text>
        </Column>
      </Row>

      <Row>
        <Column>
            <Button
                onPress={() => navigation.navigate('Register')}
            >
                <Text>Login</Text>
            </Button>
        </Column>
      </Row>

      <Row>
        <Column style={{flex: 1, alignItems: 'center'}}>
            <P>New User? <Text onPress={() => navigation.navigate('Register')} style ={{color : 'blue'}}>Sign up</Text>

            </P>
        </Column>
      </Row>
    </Container>
  );
}