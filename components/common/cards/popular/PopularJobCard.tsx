import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IPopularJobCardProps } from '../../../../interfaces';
import styles from './styles';

const PopularJobCard = (props: IPopularJobCardProps) => {
  const { item, selectedJob, handlePress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handlePress(item)}
      style={styles.container(selectedJob, item)}
    >
    </TouchableOpacity>
  )
}

export default PopularJobCard;
