export interface useFetchProps {
  endpoint: 'search' | 'search-filters' | 'job-details' | 'estimated-salary';
  params: {
    query: string,
    page: string;
    num_pages: string;
  };
}
