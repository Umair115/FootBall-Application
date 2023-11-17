import React,{useState} from 'react';
import PinkHeader from '../../components/PinkHeader';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Layout, Icon } from '@ui-kitten/components';
import TeamFixtures from '../../components/TeamFixtures';
import TopPlayers from '../../components/Players';
import CoachDrawerNavigator from '../../components/CoachDrawerNavigator'

const eventsData = [
    { teamAColor: '#dda736', teamAName: 'Eagles', teamBColor: '#4461f2', teamBName: 'Fangs' },
    { teamAColor: '#f24497', teamAName: 'Angels', teamBColor: '#fa6900', teamBName: 'Eagles' },
    { teamAColor: '#D702B5', teamAName: 'Eagles', teamBColor: '#ff5656', teamBName: 'Fangs' },
    { teamAColor: '#48cf5c', teamAName: 'Angels', teamBColor: '#ca6ef5', teamBName: 'Eagles' },
];


const Events = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScrollView>
            <Layout style={eventStyles.container}>

                <PinkHeader
                    name="Billy Trucker"
                    toggleModal={toggleModal}
                />
                <View style={eventStyles.content}>
                    <Text style={eventStyles.heading}>Fletl Baseball Events</Text>
                    <View style={eventStyles.secondaryInfo}>
                        <Icon name="calendar-outline" style={eventStyles.icon} fill="gray" />
                        <Text style={eventStyles.secondaryText}>Season 2023/24</Text>
                        <Icon name="arrow-ios-downward-outline" style={eventStyles.icon} fill="gray" />
                    </View>
                    <Text style={eventStyles.mediumHeading}>Fixtures for Current Matches</Text>
                </View>

                <TeamFixtures fixtures={eventsData} viewMoreText="View More Events" />


                <Text style={eventStyles.mediumHeading}>Fixtures for Upcoming Matches</Text>

                <TeamFixtures fixtures={eventsData} viewMoreText="View More Events" />

                {/* Modal */}
                <CoachDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
            </Layout>
        </ScrollView>
    );
};

const eventStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        marginVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    secondaryInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    secondaryText: {
        fontSize: 11,
        color: 'gray',
        marginRight: 10,
    },
    icon: {
        width: 18,
        height: 18,
    },
    mediumHeading: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
        textAlign: 'center'
    },
});

export default Events;
