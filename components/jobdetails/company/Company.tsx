import React from 'react';
import { View, Text, Image } from 'react-native';
import { checkImageURL } from '../../../utils';
import { ICompanyProps } from '../../../interfaces';
import styles from './styles';

const Company = (props: ICompanyProps) => {
  const { companyName, companyLogo, jobTitle, location } = props;

  return (
    <View style={styles.container}>
      <View style={styles.logoBox}>
        <Image 
          source={{ uri: checkImageURL(companyLogo) 
            ? companyLogo 
            : 'https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg'
          }}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      <View style={styles.jobTitleBox}>
        <Text style={styles.jobTitle}>
          {jobTitle}
        </Text>
      </View>
    </View>
  )
}

export default Company;
