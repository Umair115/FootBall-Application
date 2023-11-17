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
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        marginLeft: 10,
    },
    navigationModal: {
        marginBottom: 15,
    },
    modalFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    logoutText: {
        fontSize: 18,
        marginLeft: 5
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
        fontSize: 10,
        color: 'black',
        fontWeight: '500',
        marginLeft: 6,
        marginRight: 6
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
    },
    headingTeamName: {
        fontSize: 38,
        fontWeight: '400',
        fontWeight:'bold',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Gilroy-ExtraBold',
    },
    teamRanking: {
        fontFamily: 'Gilroy-ExtraBold',
        fontSize: 20,
        fontWeight: '400',
        fontWeight:'bold',
        color: 'rgba(255, 255, 255, 1)',
    },
    numberContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    number: {
        fontSize: 70,
        color: 'orange',
        fontWeight: '800',
        marginTop: -12
    },
    imageTeamName: {
        fontSize: 15,
        color: 'white',
        fontWeight:'400',
        fontWeight:'bold',
        marginLeft: 8,
        marginTop: 30
    },
    statsBox: {
        borderRadius: 10, // Curved corners
        backgroundColor: 'white', // Background color of the box
        padding: 16, // Padding inside the box
        shadowColor: 'black', // Shadow color
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5,
        marginHorizontal: 16,
        marginBottom: 10
    },
    mediumHeading: {
        fontSize: 16,
        fontWeight: '700',
        fontFamily:'Plus Jakarta Sans',
        color: 'rgba(57, 67, 79, 1)',
    },
    eventsContainer: {
        padding: 16,
        backgroundColor: 'white',
        borderRadius: 10,
        marginHorizontal: 16,
    },
    teamEventsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 1,
    },
    teamEventsText: {
        fontSize: 13,
        color: 'rgba(65, 65, 65, 1)',
        fontWeight:'400'
    },
    seeMoreText: {
        fontSize: 12,
        fontWeight:400,
        color: 'rgba(65, 65, 65, 1)',
    },
    boxIcon: {
        width: 16,
        height: 16,
    },
    headerUsername: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 5,
        color:'#383838'
    },
    userDesignation: {
        fontSize: 17,
        color:'#5E5E5E'
    },
    headingBetween: {
        fontSize: 14,
        color:'#414141',
        fontWeight: '400',
        margin: 16,
    },
    historyHeading:{
        fontSize:19,
        textAlign:'center',
        color:'#414141',
        marginTop:20,
        marginBottom:20,
        fontWeight:'500'
    },
    historyContainer:{
        backgroundColor:'white',
        justifyContent:'space-between'
    },
    historyBox: {
        backgroundColor: '#EEF7FE',
        borderRadius: 10,
        margin:16,
        padding: 16,
        elevation: 3,
        height:100,
        justifyContent:'center'
    },
    historyboxIcon: {
        width: 32,
        height: 32,
    },
    historyboxText: {
        fontSize: 19,
        fontWeight: '500',
        color:'#567DF4'
    },
    statsContainer:{
        backgroundColor:'white',
        borderRadius:70,
        margin:16,
        padding:16,
        flexDirection:'column',
        alignItems:'center',
    },
    progressContainer:{
        fontSize:18,
        color: '#585757',
        marginVertical:10
    },
    progressPercentage:{
        color:'#414141',
        fontSize:23,
        fontWeight:'bold'
    },
    teamBattingText: {
        fontSize: 17,
        fontWeight: 'medium',
        marginRight: 35,
        color: '#373737',
      },
      searchSection:{
            padding:16,
            backgroundColor:'white',
            color:'rgba(60, 60, 67, 0.6)',
      },
      searchBar:{
        alignItems:'center',
        borderRadius:10,
        backgroundColor:'rgba(118, 118, 128, 0.12)',  
      },
      all:{
        color:'rgba(255, 149, 0, 1)',
        fontSize:14,
        fontWeight:'500'
      },
      discoverBox:{
        backgroundColor: 'white',
        borderRadius: 10,
        margin:16,
        padding: 16,
        elevation: 3,
        justifyContent:'center'
      },
      discoverBoxText:{
        fontSize: 15,
        fontWeight: '500',
        color:'rgba(72, 72, 74, 1)',
      }
});

export const secondaryButtonGradient = {
    colors: themecolors.secondaryColor,
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    style: styles.linearGradientButton,
};
