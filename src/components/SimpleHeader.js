import React from 'react';
import { TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-ios-back' />
);

const MenuIcon = (props) => (
  <Icon {...props} name='menu-outline' />
);

const renderBackAction = () => (
  <TopNavigationAction icon={BackIcon} />
);

const renderMenuAction = (toggleModal) => (
  <TopNavigationAction icon={MenuIcon} onPress={toggleModal} />
);

const SimpleHeader = ({ title, toggleModal }) => {
  return (
    <TopNavigation
      accessoryLeft={renderBackAction}
      accessoryRight={renderMenuAction(toggleModal)}
      title={title}
      titleStyle={{ flex: 1, textAlign: 'center' }} 
    />
  );
};

export default SimpleHeader;
