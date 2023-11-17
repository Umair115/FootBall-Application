import React,{useState} from 'react'
import Pinkheader from '../../components/PinkHeader'
import TeamDrawerNavigator from '../../components/TeamDrawerNavigator';

const TeamEvents = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
      setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Pinkheader
        name="FLETL Eagles"
        toggleModal={toggleModal}
      />
      {/* Modal */}
      <TeamDrawerNavigator isVisible={isModalVisible} closeModal={toggleModal} />
    </>
  )
}

export default TeamEvents