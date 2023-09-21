import React from 'react';
import { View, FlatList } from 'react-native';
import { ITabsProps } from '../../../interfaces';
import { SIZES } from '../../../constants';
import TabButton from './TabButton';
import styles from './styles';

const Tabs = (props: ITabsProps) => {
  const { tabs, activeTab, setActiveTab } = props;

  return (
    <View style={styles.container}>
      <FlatList 
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        data={tabs}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            handleSearchType={() => setActiveTab(item)}
          />
        )}
      />
    </View>
  )
}

export default Tabs;
