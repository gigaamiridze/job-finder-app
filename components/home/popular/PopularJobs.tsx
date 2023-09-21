import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import PopularJobCard from '../../../components/common/cards/popular/PopularJobCard';
import { IPopularJobsProps } from '../../../interfaces';
import { COLORS, SIZES } from '../../../constants';
import { useFetch } from '../../../hooks';
import { useRouter } from 'expo-router';
import styles from './styles';

const PopularJobs = (props: IPopularJobsProps) => {
  const { selectedJob, setSelectedJob } = props;
  const router = useRouter();

  const params = {
    query: 'React developer',
    page: 1,
    num_pages: 1,
  };

  const { data, isLoading, error } = useFetch('search', params);

  const handleCardPress = (jobId: string) => {
    setSelectedJob(jobId);
    router.push(`/job-details/${jobId}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size='large' color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            data={data}
            keyExtractor={(item) => item.job_id}
            renderItem={({ item }) => (
              <PopularJobCard 
                item={item} 
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs;
