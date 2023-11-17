import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components';
import HomeSection from '../../components/HomeTeamSection';
import Pinkheader from '../../components/PinkHeader';
import TeamDrawerNavigator from '../../components/TeamDrawerNavigator';

const HomeTeam = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <>
            <Layout style={styles.container}>
                <Pinkheader
                    name="FLETL Eagles"
                    toggleModal={toggleModal}
                />
                <HomeSection />
                
                 {/* Modal */}
                 <TeamDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
});

export default HomeTeam