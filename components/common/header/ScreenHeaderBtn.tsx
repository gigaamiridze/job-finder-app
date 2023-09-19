import React from 'react';
import { View, Text } from 'react-native';
import { IScreenHeaderBtnProps } from '../../../interfaces';
import styles from './styles';

const ScreenHeaderBtn = (props: IScreenHeaderBtnProps) => {
  const { icon, dimension } = props;

  return (
    <View>
      <Text>ScreenHeaderBtn</Text>
    </View>
  )
}

export default ScreenHeaderBtn;
