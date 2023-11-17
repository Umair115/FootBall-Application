import React, { useState } from 'react';
import { View, Text, TouchableOpacity, profileStyleheet, ScrollView, Image, StyleSheet } from 'react-native';
import { Layout, Avatar, Icon } from '@ui-kitten/components';
import SimpleHeader from '../../components/SimpleHeader';
import CoachDrawerNavigator from '../../components/CoachDrawerNavigator';
import UpdownArrow from '../../components/UpdownArrow';


const boxData = [
    { backgroundColor: 'rgba(238, 247, 254, 1)', iconFill: 'rgba(86, 125, 244, 1)', title: 'Team', subtitle: 'All Team Performance' },
    { backgroundColor: 'rgba(255, 251, 236, 1)', iconFill: '#F3C939', title: 'Players', subtitle: 'All Players Performance' },
]

const boxDataSecond = [
    { backgroundColor: 'rgba(254, 238, 238, 1)', iconFill: 'rgba(244, 86, 86, 1)', title: 'Standings', subtitle: 'All Standings Performance' },
    { backgroundColor: 'rgba(240, 255, 255, 1)', iconFill: 'rgba(52, 222, 222, 1)', title: 'Depth Charts', subtitle: 'All Depth Charts Performance' },
]

const recentChangesData = [
    { docxName: 'Called for training sessions.docx', docxTime: "Today's Match", time: '2 hrs ago' },
    { docxName: 'Called for training sessions.docx', docxTime: "Today's Match", time: '2 hrs ago' },
];

const Profile = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Layout style={profileStyle.container}>
            <SimpleHeader title="My Profile" toggleModal={toggleModal} />

            <ScrollView>
                {/* User Information Box */}
                <View style={profileStyle.userInfoContainer}>
                    <View style={profileStyle.userInfoBox}>
                        <View style={profileStyle.avatarContainer}>
                            <View style={profileStyle.avatarBox}>
                                {/* Pink circle */}
                                <View style={profileStyle.pinkCircle} />

                                {/* Edit pencil icon */}
                                <TouchableOpacity style={profileStyle.editIconContainer}>
                                    <Icon name="edit-2-outline" fill="#fff" style={profileStyle.editIcon} />
                                </TouchableOpacity>

                                {/* Avatar */}
                                <Avatar
                                    source={require('../../assets/images/avatar.png')}
                                    size="giant"
                                    style={profileStyle.avatar}
                                />

                                {/* Curved small team text */}
                                <View style={profileStyle.curvedTextContainer}>
                                    <Text style={profileStyle.curvedText}>Coach</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={styles.headerUsername}>Billy Tucker</Text>
                        <Text style={styles.userDesignation}>Head Coach</Text>
                        <Text style={profileStyle.userInfoText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium,
                            purus vel elementum venenatis, justo mauris facilisis ante, in volutpat
                            justo libero quis lectus.
                        </Text>
                    </View>
                </View>


                <Text style={styles.headingBetween}>Coaching Statistics</Text>

                <View style={profileStyle.boxContainer}>
                    {boxData.map((box, index) => (
                        <View key={index} style={[profileStyle.box, { backgroundColor: box.backgroundColor }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name="file-remove" fill={box.iconFill} style={profileStyle.boxIcon} />
                                <Icon name="more-vertical-outline" fill={box.iconFill} style={{ width: 22, height: 20, marginLeft: 95 }} />
                            </View>
                            <Text style={[profileStyle.boxText, { color: box.iconFill }]}>{box.title}</Text>
                            <Text style={{ color: box.iconFill, fontSize: 8 }}>{box.subtitle}</Text>
                        </View>
                    ))}
                </View>


                <View style={profileStyle.boxContainer}>
                    {boxDataSecond.map((box, index) => (
                        <View key={index} style={[profileStyle.box, { backgroundColor: box.backgroundColor }]}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Icon name="file-remove" fill={box.iconFill} style={profileStyle.boxIcon} />
                                <Icon name="more-vertical-outline" fill={box.iconFill} style={{ width: 22, height: 20, marginLeft: 95 }} />
                            </View>
                            <Text style={[profileStyle.boxText, { color: box.iconFill }]}>{box.title}</Text>
                            <Text style={{ color: box.iconFill, fontSize: 8 }}>{box.subtitle}</Text>
                        </View>
                    ))}
                </View>


                {/* recent chnage */}

                <UpdownArrow name="Recent Changes" />

                {recentChangesData.map((change, index) => (
                    <View key={index} style={profileStyle.recentChangesContainer}>
                        <View style={profileStyle.docxContainer}>
                            <View style={profileStyle.docxCircle}>
                                <Image source={require('../../assets/images/word.png')}
                                    style={profileStyle.docxImage} />
                            </View>
                            <View style={profileStyle.docxTextContainer}>
                                <Text style={profileStyle.docxName}>{change.docxName}</Text>
                                <Text style={profileStyle.docxTime}>{change.docxTime}</Text>
                            </View>
                        </View>
                        <Text style={profileStyle.todayMatch}>{change.time}</Text>
                    </View>
                ))}

            </ScrollView>

            {/* Modal */}
            <CoachDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
        </Layout>
    );
};

const profileStyle = StyleSheet.create({
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
    userInfoText: {
        fontSize: 10,
        textAlign: 'center',
        marginTop: 8,
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
        height: 23,
    },
    docxTextContainer: {
        flexDirection: 'column',
    },
    docxName: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#414141'
    },
    docxTime: {
        fontSize: 10,
        color: '#828282',
    },
    todayMatch: {
        fontSize: 10,
        color: '#828282',
        fontWeight: '400',
        margin: 16,
    },
    avatarContainer: {
        alignItems: 'center',
    },
    avatarBox: {
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pinkCircle: {
        position: 'absolute',
        width: 17,
        height: 17,
        borderRadius: 20,
        backgroundColor: '#c91b8c',
        bottom: 0,
        right: -5,
    },
    editIconContainer: {
        position: 'absolute',
        top: 41,
        right: -2,
    },
    editIcon: {
        width: 12,
        height: 12,
    },
    avatar: {
        zIndex: -1, 
    },
    curvedTextContainer: {
        position: 'absolute',
        top: -3,
        left:40,
        paddingHorizontal:5,
        paddingVertical:1,
        backgroundColor: 'rgba(4, 201, 47, 1)',
        borderRadius: 5,
    },
    curvedText: {
        color: 'rgba(255, 255, 255, 1)',
        fontSize:10,
        fontWeight: 'medium',
    },


});

export default Profile;
