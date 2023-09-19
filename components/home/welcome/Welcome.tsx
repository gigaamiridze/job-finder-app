import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { icons } from '../../../constants';
import styles from './styles';

const Welcome = () => {
  const [search, setSearch] = useState<string>('');
  
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Hello Giga</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            placeholder='What are you looking for?'
            value={search}
            onChangeText={(value) => {setSearch(value)}}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {}}
          style={styles.searchBtn}
        >
          <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Welcome;
