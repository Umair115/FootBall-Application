import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from '@ui-kitten/components';
import styles from '../theme'

const TopPlayers = ({ Players, viewMoreText ,rating,teamtext,playertext,image}) => {
    return (
        <>
            <View style={styles.winnerImageContainer}>
                <Image
                    source={image}
                    style={[styles.winnerImage, { height: 160 }]}
                />
                <View style={styles.winnerElements}>
                    <View style={styles.rightWinner}>
                        <View style={styles.ratingOval}>
                        <Text style={styles.ovalText}>{rating}</Text>
                        </View>
                        <Text style={styles.winnerText}>Rank 01</Text>
                        <Text style={styles.teamText}>{teamtext}</Text>
                        <Text style={[styles.teamEventsText, { color: '#dda736', fontSize: 14, fontWeight: 500 }]}>{playertext}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.vsContainer}>
                {Players.map((fixture, index) => (
                    <View style={styles.teamFixture} key={index}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.vsTextContainer, { marginRight: 10 }]}>
                                <Text style={styles.vsText}>{fixture.rankingNumber}</Text>
                            </View>
                            <View style={[styles.circle, { backgroundColor: fixture.teamAColor }]}>
                                <Image
                                    source={require('../assets/images/image8.png')}
                                    style={styles.circleImage}
                                />
                            </View>
                            <Text style={styles.playerName}>{fixture.playerName}</Text>
                        </View>

                        <Text style={styles.teamName}>{fixture.teamName}</Text>
                    </View>


                ))}
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.teamEventsText}>{viewMoreText}</Text>
                    <Icon name="arrow-ios-downward-outline" fill="black" style={styles.boxIcon} />
                </View>
            </View>

        </>
    );
};


export default TopPlayers;
