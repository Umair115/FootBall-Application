import React from 'react';
import { View } from 'react-native';
import {Layout} from '@ui-kitten/components';

const Container = ({ children, style, ...props }) => {
    return (
        <Layout style={{ flex: 1, padding: 15, width: '100%'}} {...props}>
            {children}
        </Layout>
    );
};

const Row = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: 'row', marginHorizontal: -5, marginBottom: 7.5 }, style]} {...props}>
      {children}
    </View>
  );
};

const Column = ({ children, style, ...props }) => {
  return (
    <View style={[{ flexDirection: 'column', paddingHorizontal: 5, flex: 1 }, style]} {...props}>
      {children}
    </View>
  );
};

export { Container, Row, Column };