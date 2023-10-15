import React from 'react';
import { View } from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import styles from '../theme'

const H1 = ({ children, style, ...props }) => {
    return (
        <Text category='h1' style={{ marginBottom: 12 }} {...props}>
            {children}
        </Text>
    );
};

const H2 = ({ children, style, ...props }) => {
  return (
    <Text category='h2' style={styles.heading} {...props}>
        {children}
    </Text>
  );
};

const H3 = ({ children, style, ...props }) => {
  return (
    <Text category='h3' style={{ marginBottom: 5 }} {...props}>
        {children}
    </Text>
  );
};

const P = ({ children, style, ...props }) => {
    return (
        <Text category='p1' style={styles.text} {...props}>
            {children}
        </Text>
    );
};

const Label = ({ children, style, ...props }) => {
    return (
        <Text category='label' style={{ marginBottom: 5 }} {...props}>
            {children}
        </Text>
    );
};

export { H1, H2, H3, P, Label };