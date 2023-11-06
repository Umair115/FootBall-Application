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
    illustrationImage: {
        width: 440,
        height: 500,
        top: -15,
        left: -10,
        position: 'absolute',
    },
    IllustrationText: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: 300
    },
    scrollViewContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modal: {
        position: 'absolute',
        margin: 0,
        width: '75%',
        flexDirection:'column',
        justifyContent:'space-between',
        backgroundColor: 'rgba(238, 247, 254, 1)',
        height: '100%',
    },
    modalTop: {
        backgroundColor: 'white',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        paddingVertical: 16,
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
        marginLeft:5
    },

    teamFixture: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 3,
        marginBottom: 10,
    },

    circleImage: {
        width: 37,
        height: 37,
        borderRadius: 25,
    },

    circle: {
        width: 45,
        height: 45,
        borderRadius: 30,
        backgroundColor: '#48cf5c',
        justifyContent: 'center',
        alignItems: 'center',
    },
    vsTextContainer: {
        borderColor: 'rgba(238, 247, 254, 1)',
        padding: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        borderWidth: 2,
    },
    vsText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'grey',
    },

    teamName: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500',
        marginLeft: 6
    },
    playerName: {
        fontSize: 16,
        marginLeft: 6,
        fontSize: 14,
        color: 'grey',
        fontWeight: 'bold'
    },
    vsContainer: {
        flexDirection: 'column',
        marginHorizontal: 16,
        marginVertical: 16,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    boxIcon: {
        width: 20,
        height: 20,
    },
    winnerImageContainer: {
        position: 'relative',
        borderRadius: 10,
        marginHorizontal: 16,
    },

    winnerImage: {
        width: '100%',
        height: 230,
        borderRadius: 10,
        resizeMode: 'cover',
    },
    winnerElements: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rightWinner: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        paddingHorizontal: 16,
        paddingVertical: 10,
        flex: 1,
    },
    winnerText: {
        fontSize: 20,
        color: '#48cf5c',
        fontWeight: '900',
    },
    teamText: {
        fontSize: 22,
        color: 'white',
        fontWeight: '900'
    },
    ratingOval: {
        borderRadius: 20,
        backgroundColor: 'white',
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 2,
        paddingBottom: 2
    },
    ovalText: {
        fontSize: 10,
        color: 'black',
        fontWeight: '500'
    }
});

export const secondaryButtonGradient = {
    colors: themecolors.secondaryColor,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    style: styles.linearGradientButton,
};
