import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Layout, Avatar, Icon } from '@ui-kitten/components';
import CoachHeader from '../../components/CoachHeader';
import DrawerNavigator from '../../components/CoachDrawerNavigator';


const boxData = [
    { backgroundColor: 'rgba(238, 247, 254, 1)', iconFill: 'rgba(86, 125, 244, 1)', title: 'Team', subtitle: 'All Team Performance' },
    { backgroundColor: 'rgba(255, 251, 236, 1)', iconFill: 'rgba(201, 164, 38, 1)', title: 'Players', subtitle: 'All Players Performance' },
]

const boxDataSecond = [
    { backgroundColor: 'rgba(254, 238, 238, 1)', iconFill: 'rgba(244, 86, 86, 1)', title: 'Standings', subtitle: 'All Standings Performance' },
    { backgroundColor: 'rgba(240, 255, 255, 1)', iconFill: 'rgba(52, 222, 222, 1)', title: 'Depth Charts', subtitle: 'All Depth Charts Performance' },
]

const recentChangesData = [
    {  docxName: 'Called for training sessions.docx', docxTime: "Today's Match", time: '2 hrs' },
    {  docxName: 'Called for training sessions.docx', docxTime: "Today's Match", time: '2 hrs' },
];

const Profile = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Layout style={styles.container}>
            <CoachHeader title="My Profile" toggleModal={toggleModal} />

            <ScrollView>
                {/* User Information Box */}
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfoBox}>
                        <Avatar
                            source={require('../../assets/images/avatar.png')}
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
                    {boxData.map((box, index) => (
                        <View key={index} style={[styles.box, { backgroundColor: box.backgroundColor }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name="file-remove" fill={box.iconFill} style={styles.boxIcon} />
                                <Icon name="more-vertical-outline" fill={box.iconFill} style={{ width: 22, height: 20, marginLeft: 95 }} />
                            </View>
                            <Text style={[styles.boxText, { color: box.iconFill }]}>{box.title}</Text>
                            <Text style={{ color: box.iconFill, fontSize: 8 }}>{box.subtitle}</Text>
                        </View>
                    ))}
                </View>


                <View style={styles.boxContainer}>
                    {boxDataSecond.map((box, index) => (
                        <View key={index} style={[styles.box, { backgroundColor: box.backgroundColor }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name="file-remove" fill={box.iconFill} style={styles.boxIcon} />
                                <Icon name="more-vertical-outline" fill={box.iconFill} style={{ width: 22, height: 20, marginLeft: 95 }} />
                            </View>
                            <Text style={[styles.boxText, { color: box.iconFill }]}>{box.title}</Text>
                            <Text style={{ color: box.iconFill, fontSize: 8 }}>{box.subtitle}</Text>
                        </View>
                    ))}
                </View>


                {/* recent chnage */}


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.headingBetween}>Recent Changes</Text>

                    <View style={styles.upDownIconContainer}>
                        <Icon name="arrow-upward-outline" fill="black" style={styles.upDownIcon} />
                        <Icon name="arrow-downward-outline" fill="black" style={styles.upDownIcon} />
                    </View>
                </View>
                {recentChangesData.map((change, index) => (
                    <View key={index} style={styles.recentChangesContainer}>
                        <View style={styles.docxContainer}>
                            <View style={styles.docxCircle}>
                                <Image source={require('../../assets/images/word.png')} style={styles.docxImage} />
                            </View>
                            <View style={styles.docxTextContainer}>
                                <Text style={styles.docxName}>{change.docxName}</Text>
                                <Text style={styles.docxTime}>{change.docxTime}</Text>
                            </View>
                        </View>
                        <Text style={styles.todayMatch}>{change.time}</Text>
                    </View>
                ))}

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
        fontSize: 14,
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
    docxImage: {
        width: 25,
        height: 25,
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
