import { Dispatch } from 'react';

export interface IAppContext {
  pageTitle: string;
  selectCountry: number;
  handleCountrySelect: (item: number) => void;
  setPageTitle: Dispatch<React.SetStateAction<string>>;
}
