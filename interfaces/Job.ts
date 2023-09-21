import { IJobItem } from './JobItem';

export interface IPopularJobsProps {
  selectedJob: string | null;
  setSelectedJob: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IPopularJobCardProps {
  item: IJobItem;
  selectedJob: string | null;
  handleCardPress: (jobId: string) => void;
}

export interface INearbyJobCardProps {
  item: IJobItem;
  handleNavigate: () => void;
}

export interface IJobAboutProps {
  info: string;
}

export interface IJobFooterProps {
  url: string;
}
