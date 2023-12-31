import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { globalStyles } from '../styles';
import { icons, images } from '../constants';
import { ScreenHeaderBtn, Welcome, PopularJobs, NearbyJobs } from '../components';

const Home = () => {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const router = useRouter();

  return (
    <TouchableWithoutFeedback onPress={() => setSelectedJob(null)}>
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
              />
            ),
            headerRight: () => (
              <ScreenHeaderBtn 
                iconUrl={images.profile} 
                dimension='100%' 
              />
            ),
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={globalStyles.paddingHorizontal}
        >
          <Welcome 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handlePress={() => {
              if (searchTerm) {
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
          <PopularJobs 
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
          />
          <NearbyJobs />
        </ScrollView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default Home;
