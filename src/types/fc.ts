import { ReactNode } from 'react';

export interface IBaseProps {
  children?: ReactNode | ReactNode[];
  className?: string;
  dataCy?: string;
}