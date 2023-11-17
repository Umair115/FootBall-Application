import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components';


const Pinkheader = ({ name, toggleModal }) => {
    return (
        <>
            {/* Header with image and avatar */}
            <Image
                source={require('../assets/images/headerImage.png')}
                style={styles.headerImage}
            />

            {/* <View style={styles.headerOverlay} /> */}

            <View style={styles.avatarContainer}>
                <Avatar
                    source={require('../assets/images/avatar.png')}
                    size="giant"
                    style={{ borderColor: 'rgba(244, 86, 86, 1)', borderWidth: 3 }}
                />
                <View style={styles.welcomeContainer}>
                    <Text style={styles.welcomeText}>Hello, Welcome🎉</Text>
                    <Text style={styles.username}>{name}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.iconContainer}>
                        <Icon name="bell-outline" style={styles.icon} fill='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconContainer} onPress={toggleModal}>
                        <Icon name="menu-outline" style={styles.icon} fill='rgba(255, 255, 255, 0.7)' />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerImage: {
        width: '100%',
        height: 180,
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
        marginRight: 110,
    },
    welcomeText: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: '400',
        letterSpacing: 0,
    },
    iconContainer: {
        backgroundColor: 'transparent',
        borderColor: '#EDEDED4D',
        borderRadius: 8,
        padding: 1,
        borderWidth: 1,
        marginRight: 5
    },
    username: {
        fontSize: 16,
        fontWeight: '700',
        color: 'white'
    },
    icon: {
        width: 24,
        height: 24,
    },
});

export default Pinkheader;
