import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ITabButtonProps } from '../../../interfaces';
import styles from './styles';

const TabButton = (props: ITabButtonProps) => {
  const { name, activeTab, handleSearchType } = props;

  return (
    <TouchableOpacity 
      style={styles.btn(name, activeTab)}
      onPress={handleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  )
}

export default TabButton;
