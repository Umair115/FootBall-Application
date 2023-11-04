import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon, Avatar } from '@ui-kitten/components';
import Modal from 'react-native-modal';
import styles from '../theme'

const DrawerNavigator = ({ isVisible, closeModal }) => {
  return (
    <Modal isVisible={isVisible} style={styles.modal}>
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
        <Text>Profile Content</Text>
        {/* Add your profile content here */}
      </View>

      {/* Logout section at the bottom */}
      <View style={styles.modalFooter}>
        <TouchableOpacity onPress={closeModal}>
          <Icon name="log-out" width={32} height={32} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};


export default DrawerNavigator;
