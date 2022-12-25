import { ReactNode } from 'react';

import { Header } from '../header';

type ExpertsLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: ExpertsLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
