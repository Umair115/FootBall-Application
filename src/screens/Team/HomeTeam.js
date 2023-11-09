import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components';
import HomeSection from '../../components/HomeTeamSection';
import Pinkheader from '../../components/PinkHeader';

const HomeTeam = () => {
    return (
        <>
            <Layout style={styles.container}>
                <Pinkheader
                    name="FLETL Eagles"

                />
                <HomeSection />
            </Layout>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }
});

export default HomeTeam