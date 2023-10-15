import { StyleSheet } from 'react-native';
import themecolors from './themecolors';

export default styles = StyleSheet.create({
    linearGradientButton: {
        height: 45,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signinButton: {
        backgroundColor: themecolors.primaryColor,
        height: 45,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'transparent',
    },
    exploreButton: {
        color: themecolors.primaryColor,
        height: 45,
        borderRadius: 21,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: themecolors.primaryColor,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontFamily: themecolors.fontFamily,
        fontWeight: 'bold',
        fontSize: 17,
        letterSpacing: 0.06,
    },
    paragraph: {
        color: themecolors.primaryColor,
        fontFamily: themecolors.fontFamily,
        fontWeight: 'bold',
        fontSize: 14,
        letterSpacing: 0.09
    },
    heading: {
        fontFamily: themecolors.fontFamily,
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 0,
        textAlign: "center",
        marginBottom: 30,
        color: "#000000",
        opacity: 1
    },
    text: {
        fontSize: 20,
        fontWeight: 'normal',
        marginBottom: 5,
        color: "#000000",
        opacity: 1,
        textAlign: 'center'
    },
    inputField: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 60,
        borderWidth: 0,
    },
    otpDigitContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#F0F0F0', // Use your desired gray background color
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      otpDigitText: {
        color: '#000', // Use your desired text color
        fontSize: 20,
      },
      inputContainer: {
        width: '80%',
        backgroundColor: '#F0F0F0', // Use your desired gray background color
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
      },
});

export const secondaryButtonGradient = {
    colors: themecolors.secondaryColor,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    style: styles.linearGradientButton,
};
