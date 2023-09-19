import React from 'react';
import { Stack } from 'expo-router';
import { SafeAreaView, ScrollView } from 'react-native';
import { globalStyles } from '../styles';
import { icons, images } from '../constants';
import { ScreenHeaderBtn, Welcome, PopularJobs } from '../components';

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={globalStyles.paddingHorizontal}
      >
        <Welcome />
        <PopularJobs />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home;
