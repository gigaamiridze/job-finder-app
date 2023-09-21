import React from 'react';
import { View, Text } from 'react-native';
import { ISpecificsProps } from '../../../interfaces';
import styles from './styles';

const Specifics = (props: ISpecificsProps) => {
  const { title, points } = props;

  return (
    <View>
      <Text>Specifics</Text>
    </View>
  )
}

export default Specifics;
