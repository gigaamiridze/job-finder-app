import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { SIZES, icons } from '../../../constants';
import styles from './styles';

const Welcome = () => {
  const [search, setSearch] = useState<string>('');
  const [activeJobType, setActiveJobType] = useState<string>('Full-time');
  const jobTypes = ['Full-time', 'Part-time', 'Contractor'];
  const router = useRouter();
  
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
      <View style={styles.tabsContainer}>
        <FlatList 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.small }}
          data={jobTypes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setActiveJobType(item);
                router.push(`/search/${item}`);
              }}
              style={styles.tab(activeJobType, item)}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}

export default Welcome;
