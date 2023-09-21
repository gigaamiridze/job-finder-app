import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import { SafeAreaView, ActivityIndicator, FlatList, Image, TouchableOpacity, View, Text } from 'react-native';
import { ScreenHeaderBtn, NearbyJobCard } from '../../components';
import { searchStyles, globalStyles } from '../../styles';
import { COLORS, icons, SIZES } from '../../constants';
import { IFetchData } from '../../interfaces';

const JobSearch = () => {
  const [searchResult, setSearchResult] = useState<any[] | null>(null);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [searchLoader, setSearchLoader] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const params = useSearchParams();
  const router = useRouter();

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);

    try {
      const options = {
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        },
        params: {
          query: params.id,
          page: page.toString(),
        },
      };

      const { data } = await axios.request<IFetchData>(options);
      setSearchResult(data?.data);
    } catch (error) {
      setSearchError(error as string | null);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  const handlePagination = (direction: 'left' | 'right') => {
    if (direction === 'left' && page > 1) {
      setPage(page - 1);
      handleSearch();
    } else if (direction === 'right') {
      setPage(page + 1);
      handleSearch();
    }
  }

    useEffect(() => {
      handleSearch();
    }, []);

    return (
      <SafeAreaView style={globalStyles.screenContainer}>
        <Stack.Screen
          options={{
            headerStyle: globalStyles.backgroundWhite,
            headerShadowVisible: false,
            headerTitle: '',
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.left}
                dimension='60%'
                handlePress={() => router.back()}
              />
            ),
          }}
        />
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item.job_id}
          renderItem={({ item }) => (
            <NearbyJobCard
              item={item}
              handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
            />
          )}
          contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
          ListHeaderComponent={() => (
            <>
              <View style={searchStyles.container}>
                <Text style={searchStyles.searchTitle}>{params.id}</Text>
                <Text style={searchStyles.noOfSearchedJobs}>Job Opportunities</Text>
              </View>
              <View style={searchStyles.loaderContainer}>
                {searchLoader ? (
                  <ActivityIndicator size='large' color={COLORS.primary} />
                ) : searchError && (
                  <Text>Oops, something went wrong</Text>
                )}
              </View>
            </>
          )}
          ListFooterComponent={() => (
            <View style={searchStyles.footerContainer}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={searchStyles.paginationButton}
                onPress={() => handlePagination('left')}
              >
                <Image
                  source={icons.chevronLeft}
                  resizeMode='contain'
                  style={searchStyles.paginationImage}
                />
              </TouchableOpacity>
              <View style={searchStyles.paginationTextBox}>
                <Text style={searchStyles.paginationText}>{page}</Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.5}
                style={searchStyles.paginationButton}
                onPress={() => handlePagination('right')}
              >
                <Image
                  source={icons.chevronRight}
                  resizeMode='contain'
                  style={searchStyles.paginationImage}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    )
}

export default JobSearch;
