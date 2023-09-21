import React from 'react';
import { View, Text } from 'react-native';
import { ISpecificsProps } from '../../../interfaces';
import styles from './styles';

const Specifics = (props: ISpecificsProps) => {
  const { title, points } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      <View style={styles.pointsContainer}>
        {points.map((item, index) => (
          <View 
            key={index}
            style={styles.pointWrapper}
          >
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Specifics;
