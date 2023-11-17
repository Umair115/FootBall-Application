import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Avatar } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import styles from '../theme'

const DrawerNavigator = ({ isVisible, closeModal, navigation }) => {
    return (
        <Modal
            isVisible={isVisible}
            style={[styles.modal, { marginLeft: 0, marginRight: '25%' }]}
            animationIn="slideInLeft"
            animationOut="slideOutLeft"
        >
            {/* Top part of the modal with curved background */}
            <View style={styles.modalTop}>
                <View style={styles.modalHeader}>
                    <Avatar
                        source={require('../assets/images/avatar.png')}
                        size="giant"
                    />
                    <View style={styles.userInfo}>
                        <Text style={styles.username}>Billy Tucker</Text>
                        <Text style={styles.roleText}>Head Coach</Text>
                    </View>
                </View>
            </View>

            {/* Main content area */}
            <View style={styles.modalContent}>
                <Text onPress={() => navigation.navigate('Homecoach')} style={styles.navigationModal} >Home</Text>
                <Text style={styles.navigationModal}>Account</Text>
                <Text onPress={() => navigation.navigate('Profile')} style={styles.navigationModal}>Profile</Text>
                <Text style={styles.navigationModal}>History</Text>
                <Text style={styles.navigationModal}>Stats</Text>
                <Text style={styles.navigationModal}>Team</Text>
                <Text style={styles.navigationModal}>Setting</Text>
                <Text style={styles.navigationModal}>Help</Text>

            </View>

            {/* Logout section at the bottom */}
            <View style={styles.modalFooter}>
                <TouchableOpacity onPress={closeModal}>
                    <Icon name="log-out" width={25} height={25} />

                </TouchableOpacity>
                <Text style={styles.logoutText}>Logout</Text>
            </View>
        </Modal>
    );
};


export default DrawerNavigator;
