import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from '@ui-kitten/components';
import TeamFixtures from './TeamFixtures';
import TopPlayers from './Players';

const winnerData = [
  { title: 'Batting', rating: 'Rating 4.2', icon: 'bar-chart-2-outline', backgroundColor: 'white' },
  { title: 'Pitching', rating: 'Rating 4.2', icon: 'flash-outline', backgroundColor: '#ff5656' },
  { title: 'Fielding', rating: 'Rating 4.2', icon: 'clock-outline', backgroundColor: 'white' },
];


const fixturesData = [
  { teamAColor: '#dda736', teamAName: 'Eagles', teamBColor: '#ff5656', teamBName: 'Fangs' },
  { teamAColor: '#ca6ef5', teamAName: 'Angels', teamBColor: '#dda736', teamBName: 'Eagles' },
];

const TeamData = [
  { teamAColor: '#ff5656', rankingNumber: '02', playerName: 'Fletfl Eagles', teamName: 'Coach Buckley' },
  { teamAColor: '#ca6ef5', rankingNumber: '03', playerName: 'Fletfl Angels', teamName: 'Coach Xander' },
]

const PlayersData = [
  { teamAColor: '#ff5656', rankingNumber: '02', playerName: 'Alexendar Isak', teamName: 'Fletfl Eagles' },
  { teamAColor: '#ca6ef5', rankingNumber: '03', playerName: 'Alexendar Isak', teamName: 'Fletfl Angels' },
]

const HomeTeamSection = () => {
  return (
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

      {/* Winner image container */}
      <View style={styles.winnerImageContainer}>
        <Image
          source={require('../assets/images/backdrop4.png')}
          style={styles.winnerImage}
          resizeMode="cover"
        />
        <View style={styles.winnerElements}>
          <View style={{ flexDirection: 'column' }}>

            {winnerData.map((data, index) => (
              <View key={index} style={[styles.box, { backgroundColor: data.backgroundColor }]}>
                <View style={styles.boxContent}>
                  <Icon name={data.icon} style={styles.boxIcon} />
                  <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.boxTitle}>{data.title}</Text>
                    <Text style={styles.boxRating}>{data.rating}</Text>
                  </View>
                </View>
              </View>
            ))}

          </View>
          <View style={styles.rightWinner}>
            <Text style={styles.winnerText}>Winners:</Text>
            <Text style={styles.teamText}>FLETFL EAGLES</Text>
          </View>
        </View>
      </View>

      {/* vs container */}
      <TeamFixtures fixtures={fixturesData} viewMoreText="View More Events" />

      {/* blue box */}

      <View style={[styles.container, { backgroundColor: '#1b85f3', height: 140 }]}>
        <View style={[styles.contentContainer, { flex: 0.6 }]}>
          <Text style={styles.blueBoxtext}>Training Session Alert</Text>
          <Text style={styles.blueBoxtext}>By Coach</Text>
          <Text style={[styles.teamEventsText, { color: 'white' }]}>For Next Upcoming Vidoes</Text>
        </View>
        <Image
          source={require('../assets/images/image8.png')}
          style={[styles.image, { flex: 0.4 }]}
          resizeMode="cover"
        />
      </View>


      {/*  Top teams */}


      <View style={styles.eventsContainer}>
        <Text style={styles.mediumHeading}>Top Teams</Text>
        <View style={styles.teamEventsContainer}>
          <Text style={styles.teamEventsText}>Teams Ranking</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.seeMoreText}>See more</Text>
            <Icon name="arrow-ios-forward-outline" style={styles.boxIcon} />
          </View>
        </View>
      </View>

      <TopPlayers
        Players={TeamData}
        viewMoreText="View Full Table"
        rating="Rating 4.8"
        teamtext="FLETFL EAGLES"
        playertext="Coach Billy Trucker"
        image={require('../assets/images/backdrop4.png')}
      />

      {/* {Top Player} */}


      <View style={styles.eventsContainer}>
        <Text style={styles.mediumHeading}>Top Players</Text>
        <View style={styles.teamEventsContainer}>
          <Text style={styles.teamEventsText}>Players Ranking</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={styles.seeMoreText}>See more</Text>
            <Icon name="arrow-ios-forward-outline" style={styles.boxIcon} />
          </View>
        </View>
      </View>
      <TopPlayers
        Players={PlayersData}
        viewMoreText="View Full Table"
        rating="Rating 4.4"
        teamtext="Luiz Spencer"
        playertext="FLETFL EAGLES"
        image={require('../assets/images/backdrop5.png')}
      />

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#c91b8c',
    borderRadius: 10,
    padding: 2,
    height: 160,
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 16,
    marginBottom: 16,
    elevation: 4,
  },
  image: {
    flex: 0.7,
    aspectRatio: 0.9,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
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
    fontWeight: 'bold',
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    fontSize: 60,
    color: 'orange',
    fontWeight: '900',
  },
  teamName: {
    fontSize: 14,
    color: 'white',
    marginLeft: 8,
  },
  mediumHeading: {
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
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
    color: 'black',
  },
  seeMoreText: {
    fontSize: 12,
    color: 'black',
  },
  winnerImageContainer: {
    position: 'relative',
    borderRadius: 10,
    marginHorizontal: 16,
  },

  winnerImage: {
    width: '100%',
    height: 230,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  winnerElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  boxText: {
    fontSize: 16,
    color: 'black',
  },
  boxIcon: {
    width: 20,
    height: 20,
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
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
  rightWinner: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flex: 1,
  },
  winnerText: {
    fontSize: 20,
    color: '#48cf5c',
    fontWeight: '900',
  },
  teamText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500'
  },
  blueBoxtext: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white'
  }

})

export default HomeTeamSection;
