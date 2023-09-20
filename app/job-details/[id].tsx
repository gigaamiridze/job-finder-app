import React, { useState, useCallback } from 'react';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, RefreshControl, Text } from 'react-native';
import { ScreenHeaderBtn } from '../../components';
import { globalStyles } from '../../styles';
import { icons } from '../../constants';
import { useFetch } from '../../hooks';

const JobDetails = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const params = useSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch('job-details', {
    job_id: String(params.id)
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        style={globalStyles.paddingHorizontal}
      >
        <Text>Job Details</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails;
