import React from 'react';
import { View, Text, StyleSheet, Image ,ScrollView} from 'react-native';
import { Layout, Avatar, Icon } from '@ui-kitten/components';

const HomeTeamSection = () => {
  return (
    <>
    
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>Fletl</Text>
          <Text style={styles.teamRanking}>Team Rank</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>01</Text>
            <Text style={styles.teamName}>Fletl Eagles</Text>
          </View>
        </View>
        <Image
          source={require('../assets/images/image8.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.eventsContainer}>
        <Text style={styles.mediumHeading}>Recent Events</Text>
        <View style={styles.teamEventsContainer}>
          <Text style={styles.teamEventsText}>Team Events</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.seeMoreText}>See more</Text>
            <Icon name="arrow-ios-forward-outline" style={styles.boxIcon} />
          </View>
        </View>
      </View>
      <View style={styles.winnerImageContainer}>
        <Image
          source={require('../assets/images/backdrop4.png')}
          style={styles.winnerImage}
          resizeMode="cover"
        />
        <View style={styles.winnerElements}>
          {/* Winner elements go here */}
          <View style={[styles.box, styles.boxWhite]}>
            <Text style={styles.boxTitle}>Batting</Text>
            <Text style={styles.boxRating}>Rating 4.5</Text>
            <Icon name="arrow-ios-forward-outline" style={styles.boxIcon} />
          </View>
          <View style={[styles.box, styles.boxOrange]}>
            <Text style={styles.boxTitle}>Pitching</Text>
            <Text style={styles.boxRating}>Rating 3.8</Text>
            <Icon name="arrow-ios-forward-outline" style={styles.boxIcon} />
          </View>
          <View style={[styles.box, styles.boxWhite]}>
          <Icon name="clock-outline" style={styles.boxIcon} />
            <Text style={styles.boxTitle}>Fielding</Text>
            <Text style={styles.boxRating}>Rating 4.2</Text>
         
          </View>
        </View>
      </View>
      
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#c91b8c',
    borderRadius: 10,
    padding: 2,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginVertical: 16,
    marginBottom: 16,
  },
  image: {
    flex: 0.7,
    aspectRatio: 1,
    resizeMode: 'contain',
    height: 200,
  },
  contentContainer: {
    flex: 0.6,
    justifyContent: 'center',
    padding: 16,
    height: 200,
  },
  heading: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  teamRanking: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold'
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontSize: 60,
    color: 'orange',
    fontWeight: '900'
  },
  teamName: {
    fontSize: 14,
    color: 'white',
    marginLeft: 8,
  },
  mediumHeading: {
    fontSize: 20,
    fontWeight: 'medium',
    color: 'black'
  },
  eventsContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 16,
  },
  teamEventsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 1,
  },
  teamEventsText: {
    fontSize: 10,
    color: 'black'
  },
  seeMoreText: {
    fontSize: 12,
    color: 'black'
  },
  winnerImageContainer: {
    position: 'relative',
    borderRadius: 10,
    marginHorizontal: 16,
    marginVertical:16
  },
  winnerImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  winnerElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    // flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin:10,
    borderRadius:10
  },
  boxWhite: {
    backgroundColor: 'white',
  },
  boxOrange: {
    backgroundColor: '#ff5656',
  },
  boxText: {
    fontSize: 16,
    color: 'black',
  },

  boxIcon: {
    width: 20,
    height: 20,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  boxRating: {
    fontSize: 14,
    color: 'black',
    marginTop: 4,
  },

});

export default HomeTeamSection;
