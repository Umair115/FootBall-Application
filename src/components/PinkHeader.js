import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components';
import DrawerNavigator from '../components/CoachDrawerNavigator';

const Pinkheader = ({name}) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            {/* Header with image and avatar */}
            <Image
                source={require('../assets/images/backdrop6.png')}
                style={styles.headerImage}
            />
            
            <View style={styles.headerOverlay} />

            <View style={styles.avatarContainer}>
                <Avatar
                    source={require('../assets/images/avatar.png')}
                    size="giant"
                />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Hello, Welcome</Text>
                    <Text style={styles.username}>{name}</Text>
                </View>
                <View style={{   flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity>
                    <Icon name="bell-outline" style={styles.icon} fill='rgba(255, 255, 255, 0.7)' />
                </TouchableOpacity>
                <TouchableOpacity onPress={toggleModal}>
                    <Icon name="menu-outline" style={styles.icon} fill='rgba(255, 255, 255, 0.7)'/>
                </TouchableOpacity>
                </View>
            </View>

            {/* Modal */}
            <DrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    headerImage: {
        width: '100%',
        height: 120,
    },
    headerOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#c91b8c',
        opacity: 0.8,
        height:120,
    },
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    welcomeContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginRight:110,
    },
    welcomeText: {
        fontSize: 18,
        color:'white',
        fontWeight:'300'
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    },
    icon: {
        width: 32,
        height: 32,
    },
});

export default Pinkheader;
