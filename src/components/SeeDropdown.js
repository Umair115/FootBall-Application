import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from '@ui-kitten/components';
import styles from '../../theme'

const SeeDropdown = ({ heading, teamevent }) => {
    return (
        <>
            <View style={styles.eventsContainer}>
                <Text style={styles.mediumHeading}>{heading}</Text>
                <View style={styles.teamEventsContainer}>
                    <Text style={styles.teamEventsText}>{teamevent}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={styles.seeMoreText}>See more</Text>
                        <Icon name="arrow-ios-forward-outline" style={styles.boxIcon} />
                    </View>
                </View>
            </View>
        </>
    )
}


export default SeeDropdown