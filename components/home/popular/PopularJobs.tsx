import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import { PopularJobCard } from '../../../components';
import { COLORS, SIZES } from '../../../constants';
import styles from './styles';

const PopularJobs = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
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
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <PopularJobCard item={item} />
            )}
          />
        )}
      </View>
    </View>
  )
}

export default PopularJobs;
