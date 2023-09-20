interface IFetchData {
  status: string;
  request_id: string;
  parameters: ParamsType;
  data: any[];
}

type EndpointType = 'search' | 'search-filters' | 'job-details' | 'estimated-salary';
type ParamsType = {
  query: string,
  page: number;
  num_pages: number;
};

export { IFetchData, EndpointType, ParamsType };
