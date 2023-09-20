import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { IPopularJobCardProps } from '../../../../interfaces';
import styles from './styles';

const PopularJobCard = (props: IPopularJobCardProps) => {
  const { item, selectedJob, handlePress } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => handlePress(item)}
      style={styles.container(selectedJob, item)}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.logoContainer(selectedJob, item)}
      >
        <Image 
          source={{ uri: item.employer_logo }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <Text
        style={styles.companyName}
        numberOfLines={1}
      >
        {item.employer_name}
      </Text>
      <View style={styles.infoContainer}>
        <Text 
          style={styles.jobName(selectedJob, item)}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default PopularJobCard;
