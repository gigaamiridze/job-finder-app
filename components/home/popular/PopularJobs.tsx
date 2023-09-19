import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const PopularJobs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default PopularJobs;
