import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components';
import HomeSection from '../../components/HomeTeamSection';
import Pinkheader from '../../components/PinkHeader';
import CoachDrawerNavigator from '../../components/CoachDrawerNavigator'


const HomeCoach = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <Layout style={styles.container}>
            <Pinkheader
                name="Billy Trucker"
                toggleModal={toggleModal}
            />
            <HomeSection />
                {/* Modal */}
                <CoachDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
        </Layout>
           
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
});

export default HomeCoach;
