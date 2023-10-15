import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles ,{secondaryButtonGradient} from '../theme'

const LinearGradientButton = ({ title, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient {...secondaryButtonGradient}>
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearGradientButton;
