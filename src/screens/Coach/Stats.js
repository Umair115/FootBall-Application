import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Layout, ProgressBar } from '@ui-kitten/components';
import RoundHeader from '../../components/RoundHeader';
import CoachDrawerNavigator from '../../components/CoachDrawerNavigator';
import styles from '../../theme';
import PieChart from 'react-native-pie-chart'
import * as Progress from 'react-native-progress';
import LinearGradient from 'react-native-linear-gradient';

const Stats = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const widthAndHeight = 200
  const series = [400, 300, 250, 100]
  const sliceColor = ['#22215B', '#567DF4', '#F4BE37', '#4CE364']

  const totalSeries = series.reduce((acc, value) => acc + value, 0);
  const stat = [
    { teamStats: "Team Batting", percentageTxt: "38.66 % Improved" },
    { teamStats: "Team Bowling", percentageTxt: "23.80 % Improved" },
    { teamStats: "Team Fitness", percentageTxt: "12.60 % Improved" },
    { teamStats: "Team Fielding", percentageTxt: "06.75 % Improved" }
  ]

  return (
    <>
      <RoundHeader
        name="Billy Trucker"
        designation="Head Coach"
        toggleModal={toggleModal}
      />
      <ScrollView>
        <Text style={styles.historyHeading}>Coach Stats</Text>
        <View>
          <LinearGradient
            colors={['#efeae1', '#c8ceec']}
            style={[StyleSheet.absoluteFill]}
          />


          <View style={styles.statsContainer}>
            <PieChart
              widthAndHeight={widthAndHeight}
              series={series}
              sliceColor={sliceColor}
              coverRadius={0.62}
              coverFill={'#FFF'}
            />
            <Text style={styles.progressContainer}>Coaching Progress</Text>
            <Text style={styles.progressPercentage}>78.8%</Text>
            <Text style={styles.progressContainer}>Improvement From Last Season</Text>

            {stat.map((data, index) => (
              <>
                <View key={index} style={localStyles.rowContainer}>
                  <View style={[localStyles.circleDot, { backgroundColor: sliceColor[index] }]} />
                  <Text style={styles.teamBattingText}>{data.teamStats}</Text>
                  <Progress.Bar
                    progress={series[index] / totalSeries}
                    width={150} height={3}
                    color={sliceColor[index]} borderColor='grey' borderWidth={0}
                    unfilledColor='#DBDBDB'
                    reverse
                  />
                </View>
                <Text style={localStyles.percentageText}>{data.percentageTxt}</Text>
              </>
            ))}

            <Text style={[styles.progressContainer, { marginTop: 32 }]}>Export Details</Text>
          </View>



        </View>

        {/* Modal */}
        <CoachDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
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
    marginRight: 160
  },
});

export default Stats;
