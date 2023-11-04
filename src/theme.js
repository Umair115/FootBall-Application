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
        width: 80,
        height: 70,
        backgroundColor: '#F0F0F0', 
        borderRadius: 8,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      otpDigitText: {
        color: '#000', 
        fontSize: 20,
      },
      inputContainer: {
        width: '80%',
        backgroundColor: '#F0F0F0',
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
      },
      illustrationImage:{
        width:440,
        height:500,
        top:-15,
        left:-10,
        position:'absolute',
      },
      IllustrationText:{
        flexDirection: 'column', 
        alignItems:'flex-start',
        marginTop:300 
      },
      scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modal: {
        position: 'absolute',
        top: -20,
        left: -20,
        bottom: -20,
        width: '75%',
        backgroundColor: 'rgba(238, 247, 254, 1)', 
      },
      modalTop: {
        borderBottomLeftRadius: 0, 
        borderBottomRightRadius: 20, 
        backgroundColor: 'white', 
      },
      modalHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
      },
      userInfo: {
        flex: 1,
      },
      username: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      roleText: {
        fontSize: 18,
        marginTop: 8,
      },
      modalContent: {
        padding: 16,
      },
      modalFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
      },
      logoutText: {
        fontSize: 18,
      },
});

export const secondaryButtonGradient = {
    colors: themecolors.secondaryColor,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    style: styles.linearGradientButton,
};
