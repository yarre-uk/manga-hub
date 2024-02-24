import { ReactNode } from 'react';

const StateSuspense = ({
  show,
  fallback,
  children,
}: {
  show: boolean;
  fallback: ReactNode;
  children?: ReactNode;
}) => {
  return <>{show ? <>{children}</> : <>{fallback}</>}</>;
};

export default StateSuspense;
