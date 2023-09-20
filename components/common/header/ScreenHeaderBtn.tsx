import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { IScreenHeaderBtnProps } from '../../../interfaces';
import styles from './styles';

const ScreenHeaderBtn = (props: IScreenHeaderBtnProps) => {
  const { iconUrl, dimension, handlePress } = props;

  return (
    <TouchableOpacity 
      activeOpacity={0.5}
      style={styles.btnContainer}
      onPress={() => handlePress && handlePress()}
    >
      <Image 
        source={iconUrl}
        resizeMode='contain'
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn;
