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
            <ScreenHeaderBtn 
              iconUrl={icons.menu} 
              dimension='60%' 
              handlePress={() => {}}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
              iconUrl={images.profile} 
              dimension='100%' 
              handlePress={() => {}}
            />
          ),
        }}
      />
    </SafeAreaView>
  )
}

export default Home;
