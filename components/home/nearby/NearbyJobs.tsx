import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import NearbyJobCard from '../../../components/common/cards/nearby/NearbyJobCard';
import { COLORS, SIZES } from '../../../constants';
import { useFetch } from '../../../hooks';
import { useRouter } from 'expo-router';
import styles from './styles';

const NearbyJobs = () => {
  const router = useRouter();

  const params = {
    query: 'React developer',
    page: 1,
    num_pages: 1,
  };

  const { data, isLoading, error } = useFetch('search', params);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
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
          data?.data.map((item) => (
            <NearbyJobCard 
              key={item.job_id}
            />
          ))
        )}
      </View>
    </View>
  )
}

export default NearbyJobs;
