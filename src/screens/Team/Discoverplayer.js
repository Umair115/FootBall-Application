import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet,Image } from 'react-native';
import RoundHeader from '../../components/RoundHeader';
import styles from '../../theme';
import PieChart from 'react-native-pie-chart';
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';
import TeamDrawerNavigator from '../../components/TeamDrawerNavigator';
import { Input, Icon } from '@ui-kitten/components';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchIconPress = () => {
    console.log('Searching for:', searchQuery);
  };

  return (
    <View style={styles.searchSection}>
      <Input
        placeholder="Search by name of the player"
        value={searchQuery}
        textStyle={{color:'red',fontSize:14,fontWeight:'400'}}
        style={styles.searchBar}
        onChangeText={(text) => setSearchQuery(text)}
        size="small"
        accessoryLeft={() => (
          <Icon
            name="search"
            fill='rgba(60, 60, 67, 0.6)'
            onPress={onSearchIconPress}
            style={localStyles.searchIcon}
          />
        )}
      />
      <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',marginTop:8}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={localStyles.filter}>Filter</Text>
        <Icon name="menu-2-outline" fill="rgba(56, 56, 58, 1)" style={[localStyles.searchIcon,{width:15,height:15,marginTop:3,marginLeft:1}]}/>
      </View>
      <Text style={styles.all}>(All 357)</Text>
      </View>
    </View>
  );
};

const Discoverplayer = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const coachingHistoryData = [
    { playerName: 'Alex Jhonson', time: '000-000-0000',iconName:'droplet-outline', image: require('../../assets/images/image8.png'),date:'Jan 10 - Feb 10' ,name:"Player",boxBackgroundcolor:'rgba(151, 208, 165, 0.2)', color:'rgba(36, 138, 61, 1)'},
    { playerName: 'Cristopher Richard', time: '000-000-0000',iconName:'alert-circle-outline', image: require('../../assets/images/image8.png'),date:'Jan 10 - Feb 1' ,name:"Injured",boxBackgroundcolor:'rgba(195, 154, 154, 0.2)', color:'rgba(254, 70, 70, 1)'},
    { playerName: 'Adam Reeds', time: '000-000-0000',iconName:'slash-outline', image: require('../../assets/images/image8.png'),date:'Jan 10 - Feb 15' ,name:"Not Playing",boxBackgroundcolor:'rgba(235, 205, 178, 0.2)', color:'rgba(253, 138, 2, 1)'},
    { playerName: 'Selena William', time: '000-000-0000',iconName:'slash-outline', image: require('../../assets/images/image8.png'),date:'Jan 10 - Feb 15' ,name:"Not Playing",boxBackgroundcolor:'rgba(235, 205, 178, 0.2)', color:'rgba(253, 138, 2, 1)'},
    { playerName: 'Alex Jhonson', time: '000-000-0000',iconName:'droplet-outline', image: require('../../assets/images/image8.png'),date:'Jan 10 - Feb 10' ,name:"Player",boxBackgroundcolor:'rgba(151, 208, 165, 0.2)', color:'rgba(36, 138, 61, 1)'},
    { playerName: 'Cristopher Richard', time: '000-000-0000',iconName:'alert-circle-outline', image: require('../../assets/images/image8.png'),date:'Jan 10 - Feb 1' ,name:"Injured",boxBackgroundcolor:'rgba(195, 154, 154, 0.2)', color:'rgba(254, 70, 70, 1)'},
];

  return (
    <>
      <RoundHeader
        name="FLETL Eagles"
        designation="Team"
        toggleModal={toggleModal}
      />

      <Text style={styles.historyHeading}>Discoverplayer</Text>
      <SearchBar />
      <ScrollView>
        <View>
          <LinearGradient
            colors={['#efeae1', '#c8ceec']}
            style={[StyleSheet.absoluteFill]}
          />

          <View>
          {coachingHistoryData.map((history, index) => (
            <View key={index} style={styles.discoverBox}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Image
                  source={history.image}
                  style={{ width: 50, height: 50 }}
                  resizeMode="cover"
                />
                <View style={[localStyles.sameContainer,{marginLeft:10}]}>
                  <Text style={[styles.discoverBoxText]}>{history.playerName}</Text>
                  <Text style={{ fontSize: 11, fontWeight: '400', color: 'rgba(60, 60, 67, 0.6)' }}>{history.time}</Text>
                </View>
                </View>
                <View style={localStyles.sameContainer}>
                  <Text style={{ fontSize: 11, fontWeight: '400', color: 'rgba(60, 60, 67, 0.6)' }}>{history.date}</Text>
                  <View style={[localStyles.box,{backgroundColor:history.boxBackgroundcolor}]}>
                    <Icon name={history.iconName} fill={history.color} style={{width:10,height:13}}/>
                    <Text style={{fontSize:10,fontWeight:500,color:history.color}}>{history.name}</Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
          </View>
        </View>
        {/* Modal */}
        <TeamDrawerNavigator
          isVisible={isModalVisible}
          closeModal={toggleModal}
        />
      </ScrollView>
    </>
  );
};

const localStyles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  circleDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  percentageText: {
    marginTop: 5,
    color: '#666666',
    fontSize: 11,
    fontWeight: '300',
    marginRight: 160,
  },
  searchIcon: {
    width: 17,
    height: 17,
    marginRight:-6,
  },
  filter:{
    color: 'rgba(56, 56, 58, 1)',
    fontSize:15,
    fontWeight:'500'
  },
  sameContainer:{
    flexDirection: 'column', 
    justifyContent: 'flex-start' ,
  },
  box:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    padding:3,
    borderRadius:4,
    marginLeft:14
  }
});

export default Discoverplayer;
