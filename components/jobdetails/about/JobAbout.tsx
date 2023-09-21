import React from 'react';
import { View, Text } from 'react-native';
import { IJobAbout } from '../../../interfaces';
import styles from './styles';

const JobAbout = ({ info }: IJobAbout) => {
  return (
    <View>
      <Text>JobAbout</Text>
    </View>
  )
}

export default JobAbout;
