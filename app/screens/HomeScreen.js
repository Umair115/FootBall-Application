import React from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';

function HomeScreen({navigation}) {
    return (
      <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          // title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        >
          Go to Details
        </Button>
      </Layout>
    );
  }

export default HomeScreen;