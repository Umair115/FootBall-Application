import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Layout, Avatar, Icon } from '@ui-kitten/components';
import CustomHeader from '../components/CustomHeader';
import DrawerNavigator from '../components/CoachDrawerNavigator';

const Profile = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Layout style={styles.container}>
            <CustomHeader title="My Profile" toggleModal={toggleModal} />

            <ScrollView>
                {/* User Information Box */}
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfoBox}>
                        <Avatar
                            source={require('../assets/images/avatar.png')}
                            size="giant"
                        />
                        <Text style={styles.username}>Billy Tucker</Text>
                        <Text style={styles.userDesignation}>Head Coach</Text>
                        <Text style={styles.userInfoText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium,
                            purus vel elementum venenatis, justo mauris facilisis ante, in volutpat
                            justo libero quis lectus.
                        </Text>
                    </View>
                </View>


                <Text style={styles.headingBetween}>Coaching Statistics</Text>

                <View style={styles.boxContainer}>
                    <View style={[styles.box, { backgroundColor: 'rgba(238, 247, 254, 1)' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="file-outline" fill="rgba(86, 125, 244, 1)" style={styles.boxIcon} />
                            <Icon name="more-horizontal" fill="rgba(86, 125, 244, 1)" style={styles.boxIcon} />
                        </View>
                        <Text style={[styles.boxText, { color: 'rgba(86, 125, 244, 1)' }]}>Team</Text>
                        <Text style={{ color: 'rgba(86, 125, 244, 1)', fontSize: 8 }}>All Team Performance</Text>
                    </View>
                    <View style={[styles.box, { backgroundColor: 'rgba(255, 251, 236, 1)' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="file-outline" fill="rgba(201, 164, 38, 1)" style={styles.boxIcon} />
                            <Icon name="more-horizontal" fill="rgba(201, 164, 38, 1)" style={styles.boxIcon} />
                        </View>

                        <Text style={[styles.boxText, { color: 'rgba(201, 164, 38, 1)' }]}>Players</Text>
                        <Text style={{ color: 'rgba(201, 164, 38, 1)', fontSize: 8 }}>All Players Performance</Text>
                    </View>
                </View>

                <View style={styles.boxContainer}>
                    <View style={[styles.box, { backgroundColor: 'rgba(254, 238, 238, 1)' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="file-outline" fill="rgba(244, 86, 86, 1)" style={styles.boxIcon} />
                            <Icon name="more-horizontal" fill="rgba(244, 86, 86, 1)" style={styles.boxIcon} />
                        </View>


                        <Text style={[styles.boxText, { color: 'rgba(244, 86, 86, 1)' }]}>Standings</Text>
                        <Text style={{ color: 'rgba(244, 86, 86, 1)', fontSize: 8 }}>All Standings Performance</Text>
                    </View>

                    <View style={[styles.box, { backgroundColor: 'rgba(240, 255, 255, 1)', color: 'orange' }]}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Icon name="file-outline" fill="rgba(52, 222, 222, 1)" style={styles.boxIcon} />
                            <Icon name="more-horizontal" fill="rgba(52, 222, 222, 1)" style={styles.boxIcon} />
                        </View>
                        <Text style={[styles.boxText, { color: 'rgba(52, 222, 222, 1)' }]}>Depth Charts</Text>
                        <Text style={{ color: 'rgba(52, 222, 222, 1)', fontSize: 8 }}>All Depth Charts Performance</Text>
                    </View>
                </View>

                {/* recent chnage */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.headingBetween}>Recent Changes</Text>

                    <View style={styles.upDownIconContainer}>
                        <Icon name="arrow-upward-outline" fill="black" style={styles.upDownIcon} />
                        <Icon name="arrow-downward-outline" fill="black" style={styles.upDownIcon} />
                    </View>
                </View>
                <View style={styles.recentChangesContainer}>
                    <View style={styles.docxContainer}>
                        <View style={styles.docxCircle}>
                            <Icon name="file-text-outline" fill="blue" style={styles.docxIcon} />
                        </View>
                        <View style={styles.docxTextContainer}>
                            <Text style={styles.docxName}>Called for training sessions.docx</Text>
                            <Text style={styles.docxTime}>Today's Match</Text>
                        </View>
                    </View>
                    <Text style={styles.todayMatch}>2 hrs</Text>
                </View>

            </ScrollView>

            {/* Modal */}
            <DrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userInfoBox: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        width: '85%',
        elevation: 3,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 8,
    },
    userDesignation: {
        fontSize: 18,
        marginBottom: 8,
    },
    userInfoText: {
        fontSize: 10,
        textAlign: 'center',
    },
    headingBetween: {
        fontSize: 18,
        color: 'background: rgba(65, 65, 65, 1)',
        fontWeight: 'bold',
        margin: 16,
    },
    boxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginBottom: 16,
    },
    box: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        width: '45%',
        elevation: 3,

    },
    boxIcon: {
        width: 32,
        height: 32,
    },
    boxText: {
        fontSize: 16,
        marginTop: 8,
        fontWeight: 'bold'
    },
    recentChangesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginVertical: 8,
    },
    upDownIconContainer: {
        flexDirection: 'row',
        marginRight: 10
    },
    upDownIcon: {
        width: 24,
        height: 24,
    },
    docxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    docxCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: 'rgba(238, 247, 254, 1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    docxIcon: {
        width: 32,
        height: 32,
    },
    docxTextContainer: {
        flexDirection: 'column',
    },
    docxName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'rgba(65, 65, 65, 1)'
    },
    docxTime: {
        fontSize: 10,
        color: 'grey',
    },
    todayMatch: {
        fontSize: 10,
        color: 'grey',
        fontWeight: 'bold',
        margin: 16,
    },


});

export default Profile;
