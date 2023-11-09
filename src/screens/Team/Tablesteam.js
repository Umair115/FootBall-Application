import React from 'react';
import PinkHeader from '../../components/PinkHeader';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import { Layout, Icon } from '@ui-kitten/components';
import TopPlayers from '../../components/Players';
import styles from '../../theme'
import SeeScrollBar from '../../components/SeeScrollBar';
import LinearGradient from 'react-native-linear-gradient';
import LinearGradientEffect from '../../components/LinearGradientEffect';

const statsTableData = [
    { mediumHeading: 'Season Stats ', teamEvent: 'All your details in a single place  ' },
    { mediumHeading: 'All_time Stats', teamEvent: 'All your details in a single place ' },
    { mediumHeading: 'Records', teamEvent: 'All your details in a single place ' },
    { mediumHeading: 'Player Stats', teamEvent: 'All your details in a single place ' },
    { mediumHeading: 'Coach Stats', teamEvent: 'All your details in a single place ' },
    { mediumHeading: 'Team Stats', teamEvent: 'All your details in a single place ' },
];

const TeamData = [
    { teamAColor: '#ff5656', rankingNumber: '02', playerName: 'Fletfl Eagles', teamName: 'Coach Buckley' },
    { teamAColor: '#ca6ef5', rankingNumber: '03', playerName: 'Fletfl Angels', teamName: 'Coach Xander' },
]

const PlayersData = [
    { teamAColor: '#ff5656', rankingNumber: '02', playerName: 'Alexendar Isak', teamName: 'Fletfl Eagles' },
    { teamAColor: '#ca6ef5', rankingNumber: '03', playerName: 'Alexendar Isak', teamName: 'Fletfl Angels' },
]

const CoachData = [
    { teamAColor: '#ff5656', rankingNumber: '02', playerName: 'Buckley', teamName: 'Fletfl Tigers' },
    { teamAColor: '#ca6ef5', rankingNumber: '03', playerName: 'Xanders', teamName: 'Fletfl Angels' },
]

const Tablesteam = () => {

    const imageWidth = Dimensions.get('window').width * 0.44;


    return (
        <ScrollView>
            <Layout style={eventStyles.container}>

                <PinkHeader
                    name="Billy Trucker"
                />
                <View style={eventStyles.content}>
                    <Text style={eventStyles.heading}>Fletl Baseball Events</Text>
                    <View style={eventStyles.secondaryInfo}>
                        <Icon name="calendar-outline" style={eventStyles.icon} fill="gray" />
                        <Text style={eventStyles.secondaryText}>Season 2023/24</Text>
                        <Icon name="arrow-ios-downward-outline" style={eventStyles.icon} fill="gray" />
                    </View>
                </View>

                <View style={eventStyles.imageBox}>
                    <View style={eventStyles.leftImageContainer}>
                        <Image
                            source={require('../../assets/images/backdrop3.png')}
                            style={[styles.winnerImage, { height: 300, width: '95%' }]}
                            resizeMode="cover"
                        />
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.7)']}
                            style={[
                                StyleSheet.absoluteFill,
                                { width: imageWidth, borderRadius: 10 },
                            ]}
                        />
                        <View style={eventStyles.ImageContent}>
                            <Text style={styles.headingTeamName}>Fletl</Text>
                            <Text style={styles.teamRanking}>TOP PLAYER</Text>
                            <View style={styles.numberContainer}>
                                <Text style={styles.number}>Luiz</Text>
                                <Text style={[styles.imageTeamName, { fontWeight: '500', marginBottom: 10 }]}>Eagles</Text>
                            </View>
                        </View>
                    </View>
                    <View style={eventStyles.rightImageContainer}>
                        <View>
                            <Image
                                source={require('../../assets/images/backdrop2.png')}
                                style={eventStyles.rightImage}
                                resizeMode="cover"
                            />
                            <LinearGradientEffect />
                        </View>
                        <View style={[eventStyles.ImageContent, { justifyContent: 'flex-start', marginTop: 42 }]}>
                            <Text style={styles.headingTeamName}>Fletl</Text>
                            <Text style={styles.teamRanking}>TOP TEAM</Text>
                            <View style={styles.numberContainer}>
                                <Text style={[styles.number, { fontSize: 30 }]}>Eagles</Text>
                            </View>
                        </View>
                        <View>
                            <Image
                                source={require('../../assets/images/backdrop4.png')}
                                style={eventStyles.rightImage}
                                resizeMode="cover"
                            />
                            <LinearGradientEffect />
                        </View>
                        <View style={eventStyles.ImageContent}>
                            <Text style={styles.headingTeamName}>Fletl</Text>
                            <Text style={styles.teamRanking}>TOP COACH</Text>
                            <View style={styles.numberContainer}>
                                <Text style={[styles.number, { fontSize: 36 }]}>Tucker</Text>
                                <Text style={[styles.imageTeamName, { fontWeight: '500', marginTop: 5 }]}>Eagles</Text>
                            </View>
                        </View>
                    </View>

                </View>

                {/* statsdata */}

                <Text style={[eventStyles.mediumHeading, { marginBottom: 16 }]}>All_Time Stats Table</Text>
                {statsTableData.map((data, index) => (
                    <View key={index} style={styles.statsBox}>
                        <Text style={[styles.mediumHeading, { fontSize: 14 }]}>{data.mediumHeading}</Text>
                        <View style={styles.teamEventsContainer}>
                            <Text style={[styles.teamEventsText, { color: '#c2c3c4', fontWeight: '900' }]}>{data.teamEvent}</Text>
                            <View style={[styles.vsTextContainer, { marginTop: -20 }]}>
                                <Icon name="arrow-forward-outline" style={styles.boxIcon} fill="#c2c3c4" />
                            </View>
                        </View>
                    </View>
                ))}


                {/*  Top teams */}
                <SeeScrollBar
                    headingName="Top Teams"
                    teamevent="Teams Ranking"
                />

                <TopPlayers
                    Players={TeamData}
                    viewMoreText="View Full Table"
                    rating="Rating 4.8"
                    teamtext="FLETFL EAGLES"
                    playertext="Coach Billy Trucker"
                    image={require('../../assets/images/backdrop4.png')}
                />


                {/* {Top Player} */}
                <SeeScrollBar
                    headingName="Top Players"
                    teamevent="Players Ranking"
                />
                <TopPlayers
                    Players={PlayersData}
                    viewMoreText="View Full Table"
                    rating="Rating 4.4"
                    teamtext="Luiz Spencer"
                    playertext="FLETFL EAGLES"
                    image={require('../../assets/images/backdrop5.png')}
                />


                {/* {Top Coach} */}
                <SeeScrollBar
                    headingName="Top Coach"
                    teamevent="Coach Ranking"
                />
                <TopPlayers
                    Players={CoachData}
                    viewMoreText="View Full Table"
                    rating="Rating 4.4"
                    teamtext="Luiz Spencer"
                    playertext="FLETFL EAGLES"
                    image={require('../../assets/images/backdrop5.png')}
                />

            </Layout>
        </ScrollView>
    );
};

const eventStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    secondaryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    secondaryText: {
        fontSize: 11,
        color: 'gray',
        marginRight: 10,
    },
    icon: {
        width: 18,
        height: 18,
    },
    mediumHeading: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center'
    },
    imageBox: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginBottom: 16,
        justifyContent: 'space-around',
    },
    leftImageContainer: {
        width: '50%',
        position: 'relative',
        borderRadius: 10,
        marginRight: 15
    },

    rightImageContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '50%',
        position: 'relative',
        borderRadius: 10,
    },
    rightImage: {
        height: 145,
        width: '100%',
        borderRadius: 10
    },
    ImageContent: {
        position: 'absolute',
        top: 0,
        left: 10,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
});


export default Tablesteam;

