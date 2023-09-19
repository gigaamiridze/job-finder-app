import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Giga</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
    </View>
  )
}

export default Welcome;
