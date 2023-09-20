import React, { useState, useCallback } from 'react';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View, RefreshControl, Text, ActivityIndicator } from 'react-native';
import { COLORS, SIZES, icons } from '../../constants';
import { ScreenHeaderBtn, Company } from '../../components';
import { globalStyles } from '../../styles';
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
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : data?.data.length === 0 ? (
          <Text>No data available</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company 
              companyName={data?.data[0].employer_name}
              companyLogo={data?.data[0].employer_logo}
              jobTitle={data?.data[0].job_title}
              location={data?.data[0].job_country}
            />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails;
