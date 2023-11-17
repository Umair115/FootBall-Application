import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components'
import RoundHeader from '../../components/RoundHeader';
import styles from '../../theme'
import UpdownArrow from '../../components/UpdownArrow';
import TeamDrawerNavigator from '../../components/TeamDrawerNavigator';

const HistoryTeam = () => {

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const Teamwins = [
        { teamName: 'FLETL Guardians', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
        { teamName: 'FLETL Angel', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
        { teamName: 'FLETL Tigers', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
        { teamName: 'FLETL Eagles', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
    ];


    const TeamLosses = [
        { teamName: 'FLETL Fox', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
        { teamName: 'FLETL Legends', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
        { teamName: 'FLETL Hammers', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },    ];

    return (
        <>
                        <RoundHeader
                    name="Fletl Eagles"
                    designation="Team"
                    toggleModal={toggleModal}
                />
            <ScrollView>
                <Text style={styles.historyHeading}>Coaching History</Text>

                <View style={styles.historyContainer}>

                    {/* Team Wins*/}

                    <UpdownArrow name='Team Wins' />
                    {Teamwins.map((history, index) => (
                        <View style={styles.historyBox}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    source={history.image}
                                    style={{ width: 80, height: 80 }}
                                    resizeMode="cover"
                                />
                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text style={[styles.historyboxText]}>{history.teamName}</Text>
                                    <Text style={[styles.historyboxText, { fontSize: 10.5, fontWeight: '400' }]}>{history.performance}</Text>
                                </View>
                                <Icon name="more-vertical-outline" style={{ width: 22, height: 20, marginLeft: 90 }} fill="#567DF4" />

                            </View>
                        </View>))}


                    {/* Team Losses */}
                    <UpdownArrow name='Team Losses' />
                    {TeamLosses.map((history, index) => (
                        <View key={index} style={[styles.historyBox, { backgroundColor: '#FEEEEE' }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Image
                                    source={history.image}
                                    style={{ width: 80, height: 80 }}
                                    resizeMode="cover"
                                />
                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                    <Text style={[styles.historyboxText, { color: '#F45656' }]}>{history.teamName}</Text>
                                    <Text style={[styles.historyboxText, { fontSize: 10.5, fontWeight: '400', color: '#F45656' }]}>{history.performance}</Text>
                                </View>
                                <Icon name="more-vertical-outline" style={{ width: 22, height: 20, marginLeft: 90 }} fill="#F45656" />
                            </View>
                        </View>
                    ))}



                </View >

                {/* Modal */}
                <TeamDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />

            </ScrollView >
        </>
    )
}

export default HistoryTeam