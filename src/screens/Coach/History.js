import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Layout, Icon, Avatar } from '@ui-kitten/components'
import RoundHeader from '../../components/RoundHeader';
import styles from '../../theme'
import UpdownArrow from '../../components/UpdownArrow';
import CoachDrawerNavigator from '../../components/CoachDrawerNavigator';

const History = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  const coachingHistoryData = [
    { id:1,teamName: 'FLETL Fox', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
    { id:2,teamName: 'FLETL Legends', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
    { id:3,teamName: 'FLETL Hammers', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
    { id:4,teamName: 'FLETL Eagles', performance: 'All Team Performance', image: require('../../assets/images/image8.png') },
  ];

  return (
    <>
            <RoundHeader
          name="Billy Trucker"
          designation="Head Coach"
          toggleModal={toggleModal}
        />
      <ScrollView>
        <Text style={styles.historyHeading}>Coaching History</Text>

        <View style={styles.historyContainer}>

          {/* Currently Coaching */}

          <UpdownArrow name='Currently Coaching' />
          <View style={styles.historyBox}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Image
                source={require('../../assets/images/image8.png')}
                style={{ width: 80, height: 80 }}
                resizeMode="cover"
              />
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={[styles.historyboxText]}>FLETL Eagles</Text>
                <Text style={[styles.historyboxText, { fontSize: 10.5, fontWeight: '400' }]}>All Team Performance</Text>
              </View>
              <Icon name="more-vertical-outline" style={{ width: 22, height: 20, marginLeft: 90 }} fill="#567DF4" />

            </View>
          </View>

          {/* post coaching teams */}
          <UpdownArrow name='Past Coaching Teams' />
          {coachingHistoryData.map((history, index) => (
            <View key={history.id} style={[styles.historyBox, { backgroundColor: '#FEEEEE' }]}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Image
                  source={history.image}
                  style={{ width: 80, height: 80 }}
                  resizeMode="cover"
                />
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <Text style={[styles.historyboxText, { color: '#F45656' }]}>{history.teamName}</Text>
                  <Text style={[styles.historyboxText, { fontSize: 10.5, fontWeight: '400', color: '#F45656' }]}>{history.performance}</Text>
                </View>
                <Icon name="more-vertical-outline" style={{ width: 22, height: 20, marginLeft: 90 }} fill="#F45656" />
              </View>
            </View>
          ))}



        </View >
        {/* Modal */}
        <CoachDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
      </ScrollView >
    </>
  )
}

export default History