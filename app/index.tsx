import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { globalStyles } from '../styles';

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  )
}

export default Home;
