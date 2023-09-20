import React from 'react';
import { Stack, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { ScreenHeaderBtn } from '../../components';
import { globalStyles } from '../../styles';
import { icons } from '../../constants';

const JobDetails = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <Stack.Screen 
        options={{
          headerStyle: globalStyles.backgroundWhite,
          headerShadowVisible: false,
          headerBackVisible: false,
          headerTitle: '',
          headerLeft: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.left} 
              dimension='60%' 
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn 
              iconUrl={icons.share} 
              dimension='60%' 
            />
          ),
        }}
      />
    </SafeAreaView>
  )
}

export default JobDetails;
