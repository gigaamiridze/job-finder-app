import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { INearbyJobCardProps } from '../../../../interfaces';
import { checkImageURL } from '../../../../utils';
import styles from './styles';

const NearbyJobCard = (props: INearbyJobCardProps) => {
  const { item, handleNavigate } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => handleNavigate()}
      style={styles.container}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.logoContainer}
      >
        <Image 
          source={{ uri: checkImageURL(item.employer_logo) 
            ? item.employer_logo 
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text 
          style={styles.jobName}
          numberOfLines={1}
        >
          {item.job_title}
        </Text>
        <Text style={styles.jobType}>{item.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default NearbyJobCard;
