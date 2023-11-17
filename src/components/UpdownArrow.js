import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Avatar, Icon } from '@ui-kitten/components';

const UpdownArrow = ({name}) => {
    return (
        <>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.headingBetween}>{name}</Text>

                <View style={containerStyle.upDownIconContainer}>
                    <Icon name="arrow-upward-outline"  style={containerStyle.upDownIcon} />
                    <Icon name="arrow-downward-outline" style={containerStyle.upDownIcon} />
                </View>
            </View>
        </>
    )
}
const containerStyle = StyleSheet.create({
    upDownIconContainer: {
        flexDirection: 'row',
        marginRight: 16,
        marginTop: 16
    },
    upDownIcon: {
        width: 16,
        height: 16,
        fill:'#313131',
        marginRight: -5
    },
})

export default UpdownArrow