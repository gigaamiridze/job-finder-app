import { useState, useEffect } from 'react';
import { IFetchData, EndpointType, ParamsType, IJobItem } from '../interfaces';
import { RAPID_API_KEY } from '@env';
import axios from 'axios';

function useFetch(endpoint: EndpointType, params: ParamsType) {
  const [data, setData] = useState<IJobItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const options = {
    method: 'GET',
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...params },
    headers: {
      'X-RapidAPI-Key': RAPID_API_KEY,
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.request<IFetchData>(options);
      setData(data?.data);
      setIsLoading(false);
    } catch (error) {
      setError(error as string | null);
      setIsLoading(false);
    }
  };

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
}

export default useFetch;
