import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

const LinearGradientEffect = () => {
  return (
    <>
         <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                            style={[StyleSheet.absoluteFill, { borderRadius: 10 }]}
                        />
    </>
  )
}

export default LinearGradientEffect