export interface ITabsProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITabButtonProps {
  name: string;
  activeTab: string;
  handleSearchType: () => void;
}
