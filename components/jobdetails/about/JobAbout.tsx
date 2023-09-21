import React from 'react';
import { View, Text } from 'react-native';
import { IJobAboutProps } from '../../../interfaces';
import styles from './styles';

const JobAbout = ({ info }: IJobAboutProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>
      <View style={styles.contentBox}>
        <Text style={styles.contextText}>{info}</Text>
      </View>
    </View>
  )
}

export default JobAbout;
