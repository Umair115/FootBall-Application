import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from '@ui-kitten/components';
import styles from '../theme'

const TeamFixtures = ({ fixtures,viewMoreText }) => {
    return (
        <>
            <View style={styles.vsContainer}>
                {fixtures.map((fixture, index) => (
                    <View style={styles.teamFixture} key={index}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.circle, { backgroundColor: fixture.teamAColor }]}>
                                <Image
                                    source={require('../assets/images/image8.png')}
                                    style={styles.circleImage}
                                />
                            </View>
                            <Text style={styles.teamName}>{fixture.teamAName}</Text>
                        </View>
                        <View style={styles.vsTextContainer}>
                            <Text style={styles.vsText}>vs</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={[styles.circle, { backgroundColor: fixture.teamBColor }]}>
                                <Image
                                    source={require('../assets/images/image8.png')}
                                    style={styles.circleImage}
                                />
                            </View>
                            <Text style={styles.teamName}>{fixture.teamBName}</Text>
                        </View>
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


export default TeamFixtures;
