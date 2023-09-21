import React from 'react';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import { IJobFooterProps } from '../../../interfaces';
import { icons } from '../../../constants';
import styles from './styles';

const JobFooter = ({ url }: IJobFooterProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5} 
        style={styles.likeBtn}
      >
        <Image 
          source={icons.heartOutline}
          resizeMode='contain'
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5} 
        style={styles.applyBtn}
        onPress={() => Linking.openURL(url)}
      >
        <Text style={styles.applyBtnText}>Apply for job</Text>
      </TouchableOpacity>
    </View>
  )
}

export default JobFooter;
