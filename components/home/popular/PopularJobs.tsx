import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import PopularJobCard from '../../../components/common/cards/popular/PopularJobCard';
import { COLORS, SIZES } from '../../../constants';
import { useFetch } from '../../../hooks';
import styles from './styles';

const PopularJobs = () => {
  const params = {
    query: 'React developer',
    page: 1,
    num_pages: 1,
  };

  const { data, isLoading, error } = useFetch('search', params);

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
            data={data.data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <PopularJobCard 
                item={item} 
                selectedJob={''}
                handlePress={() => {}}
              />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs;
