import { IJobItem } from './Job';

interface IFetchData {
  status: string;
  request_id: string;
  parameters: ParamsType;
  data: IJobItem[];
}

type EndpointType = 'search' | 'search-filters' | 'job-details' | 'estimated-salary';
type ParamsType = {
  query?: string,
  job_id?: string;
  page?: number;
  num_pages?: number;
};

export { IFetchData, EndpointType, ParamsType };
