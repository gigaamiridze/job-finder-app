import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface IPopularJobCardProps {
  item: any;
}

const PopularJobCard = ({ item }: IPopularJobCardProps) => {
  return (
    <View>
      <Text>PopularJobCard</Text>
    </View>
  )
}

export default PopularJobCard;
