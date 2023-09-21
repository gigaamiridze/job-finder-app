import React, { useState, useCallback } from 'react';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View, RefreshControl, Text, ActivityIndicator } from 'react-native';
import { ScreenHeaderBtn, Company, Tabs, Specifics, JobAbout } from '../../components';
import { COLORS, icons } from '../../constants';
import { globalStyles } from '../../styles';
import { useFetch } from '../../hooks';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);
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

  const displayTabContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <JobAbout info={data?.data[0].job_description ?? 'No data provided'} />
        );
      case 'Qualifications':
        return (
          <Specifics 
            title='Qualifications'
            points={data?.data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );
      case 'Responsibilities':
        return (
          <Specifics 
            title='Responsibilities'
            points={data?.data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );
      default: 
        return null;
    }
  }

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
          <View style={{ paddingBottom: 100 }}>
            <Company 
              companyName={data?.data[0].employer_name}
              companyLogo={data?.data[0].employer_logo}
              jobTitle={data?.data[0].job_title}
              location={data?.data[0].job_country}
            />
            <Tabs 
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

export default JobDetails;
