import React, {
  FC, useMemo, useState, createContext, useContext,
} from 'react';

import type { IAppContext } from './types/app';

const AppContext = createContext({});

export const AppContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectCountry, setSelectCountry] = useState<number>(1);
  const [pageTitle, setPageTitle] = useState<string>('Welcome');

  const handleCountrySelect = (id: number): void => setSelectCountry(id);

  const value = useMemo(
    () => ({
      pageTitle,
      setPageTitle,
      selectCountry,
      handleCountrySelect,
    }),
    [pageTitle, selectCountry],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useApp = (): IAppContext => useContext(AppContext) as IAppContext;

export default useApp;
