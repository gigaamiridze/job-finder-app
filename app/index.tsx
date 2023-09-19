import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Stack } from 'expo-router';
import { globalStyles } from '../styles';
import { icons, images } from '../constants';
import { ScreenHeaderBtn } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <Stack.Screen 
        options={{
          headerStyle: globalStyles.backgroundWhite,
          headerShadowVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <ScreenHeaderBtn icon={icons.menu} dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn icon={images.profile} dimension='100%' />
          ),
        }}
      />
    </SafeAreaView>
  )
}

export default Home;
