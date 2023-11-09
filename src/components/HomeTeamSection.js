import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from '@ui-kitten/components';
import TeamFixtures from './TeamFixtures';
import TopPlayers from './Players';
import LinearGradient from 'react-native-linear-gradient';
import SeeScrollBar from './SeeScrollBar';
import themestyles from '../../theme'
import LinearGradientEffect from './LinearGradientEffect';

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
      <View style={[hometeamstyles.container, hometeamstyles.shadowEffect]}>
        <View style={hometeamstyles.contentContainer}>
          <Text style={styles.headingTeamName}>Fletl</Text>
          <Text style={styles.teamRanking}>Team Rank</Text>
          <View style={styles.numberContainer}>
            <Text style={styles.number}>01</Text>
            <Text style={styles.imageTeamName}>Fletl Eagles</Text>
          </View>
        </View>
        <Image
          source={require('../assets/images/image8.png')}
          style={hometeamstyles.image}
          resizeMode="cover"
        />

      </View>


      <SeeScrollBar
        headingName="Recent Events"
        teamevent="Team Events"
      />

      {/* Winner image container */}
      <View style={hometeamstyles.winnerImageContainer}>
        <Image
          source={require('../assets/images/backdrop4.png')}
          style={hometeamstyles.winnerImage}
          resizeMode="cover"
        />
        <LinearGradientEffect/>
        <View style={hometeamstyles.winnerElements}>
          <View style={{ flexDirection: 'column' }}>

            {winnerData.map((data, index) => (
              <View key={index} style={[hometeamstyles.box, { backgroundColor: data.backgroundColor }]}>
                <View style={hometeamstyles.boxContent}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Icon name={data.icon} style={hometeamstyles.boxIcon} />
                    <Text style={hometeamstyles.boxTitle}>{data.title}</Text>
                  </View>
                  <Text style={hometeamstyles.boxRating}>{data.rating}</Text>

                </View>
              </View>
            ))}

          </View>
          <View style={hometeamstyles.rightWinner}>
            <Text style={hometeamstyles.winnerText}>Winners:</Text>
            <Text style={hometeamstyles.teamText}>FLETFL EAGLES</Text>
          </View>
        </View>
      </View>

      {/* vs container */}
      <TeamFixtures fixtures={fixturesData} viewMoreText="View More Events" />

      {/* blue box */}

      <View style={[hometeamstyles.container, { backgroundColor: '#1b85f3', height: 140, elevation: 20, shadowColor: '#1b85f3' }]}>
        <View style={[hometeamstyles.contentContainer, { flex: 0.6 }]}>
          <Text style={hometeamstyles.blueBoxtext}>Training Session Alert</Text>
          <Text style={hometeamstyles.blueBoxtext}>By Coach</Text>
          <Text style={[hometeamstyles.teamEventsText, { color: 'white' }]}>For Next Upcoming Vidoes</Text>
        </View>
        <Image
          source={require('../assets/images/image8.png')}
          style={[hometeamstyles.image, { flex: 0.4 }]}
          resizeMode="cover"
        />
      </View>


      {/*  Top teams */}
      <SeeScrollBar
        headingName="Top Teams"
        teamevent="Teams Ranking"
      />

      <TopPlayers
        Players={TeamData}
        viewMoreText="View Full Table"
        rating="Rating 4.8"
        teamtext="FLETFL EAGLES"
        playertext="Coach Billy Trucker"
        image={require('../assets/images/backdrop4.png')}
      />

      {/* {Top Player} */}
      <SeeScrollBar
        headingName="Top Players"
        teamevent="Players Ranking"
      />
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

const hometeamstyles = StyleSheet.create({
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
    elevation: 20
  },
  shadowEffect: {
    elevation: 25,
    shadowColor: '#c91b8c',
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
    width: 15,
    height: 15,
    marginRight: 5,
  },
  boxContent: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  boxRating: {
    fontSize: 10,
    color: 'black',
    marginTop: 2,
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
