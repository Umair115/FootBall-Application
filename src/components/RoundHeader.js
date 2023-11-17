import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Avatar } from '@ui-kitten/components';

const RoundHeader = ({name,designation,toggleModal}) => {
    const BackIcon = (props) => (
        <Icon {...props} name='arrow-ios-back' />
    );

    const MenuIcon = (props) => (
        <Icon {...props} name='menu-outline' />
    );

    return (
        <>
            <View style={RoundHeaderStyle.header}>
                <View style={RoundHeaderStyle.topNavigation}>
                    {/* Left Section: Back Button */}
                    <TouchableOpacity onPress={() => console.log('Back button pressed')}>
                        <BackIcon style={RoundHeaderStyle.icon} />
                    </TouchableOpacity>

                    {/* Right Section: Menu Button */}
                    <TouchableOpacity  onPress={toggleModal}>
                        <Icon name="menu-outline" style={RoundHeaderStyle.icon}  />
                    </TouchableOpacity>
        
                </View>

                {/* Center Section: User Information */}
                <View style={RoundHeaderStyle.userInfoContainer}>
                    <View style={RoundHeaderStyle.userInfoBox}>
                        <Avatar
                            source={require('../assets/images/avatar.png')}
                            style={{ width: 90, height: 90 }} 

                        />
                        <Text style={styles.headerUsername}>{name}</Text>
                        <Text style={styles.userDesignation}>{designation}</Text>
                    </View>
                </View>
            </View>

        </>
    );
};

const RoundHeaderStyle = StyleSheet.create({
    header: {
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
    },
    topNavigation: {
        top:10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
    },
    userInfoContainer: {
        marginTop:-30,
        marginBottom:12
    },
    userInfoBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 24,
        height: 24,
        color:'rgba(255, 255, 255, 0.7)'
    },
});

export default RoundHeader;