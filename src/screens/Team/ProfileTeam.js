import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Layout, Avatar, Icon } from '@ui-kitten/components';
import TeamHeader from '../../components/TeamHeader';
import TeamDrawerNavigator from '../../components/TeamDrawerNavigator'


const boxData = [
    { backgroundColor: 'rgba(238, 247, 254, 1)', iconFill: 'rgba(86, 125, 244, 1)', title: 'Peformance', subtitle: 'All Season Performance' },
    { backgroundColor: 'rgba(255, 251, 236, 1)', iconFill: 'rgba(201, 164, 38, 1)', title: 'Eagles Roaster', subtitle: 'All Standings Roaster List' },
]

const boxDataSecond = [
    { backgroundColor: 'rgba(254, 238, 238, 1)', iconFill: 'rgba(244, 86, 86, 1)', title: 'Team Split', subtitle: 'All Batting & Pitching Splits' },
    { backgroundColor: 'rgba(240, 255, 255, 1)', iconFill: 'rgba(52, 222, 222, 1)', title: 'Team Health', subtitle: 'All Players Health Status' },
]

const recentChangesData = [
    {  docxName: 'Called for training sessions.docx', docxTime: "For Upcoming Match", time: '2 hrs' },
    {  docxName: 'Called for training sessions.docx', docxTime: "For Upcoming Match", time: '4 hrs' },
];

const ProfileTeam = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Layout style={styles.container}>
            <TeamHeader title="My Profile" toggleModal={toggleModal} />

            <ScrollView>
                {/* User Information Box */}
                <View style={styles.userInfoContainer}>
                    <View style={styles.userInfoBox}>
                        <Avatar
                            source={require('../../assets/images/avatar.png')}
                            size="giant"
                        />
                        <Text style={styles.username}>FLETL Eagles</Text>
                        <Text style={styles.userDesignation}>Team</Text>
                        <Text style={styles.userInfoText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium,
                            purus vel elementum venenatis, justo mauris facilisis ante, in volutpat
                            justo libero quis lectus.
                        </Text>
                    </View>
                </View>


                <Text style={styles.headingBetween}>Team Statistics</Text>

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
            <TeamDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
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
        marginRight: 16,
        marginTop:13
    },
    upDownIcon: {
        width: 18,
        height: 18,
        marginRight:-5
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

export default ProfileTeam;
