import React, { ReactNode } from 'react';
import { ScreenContainer } from './styles';

interface IProps {
  children?: ReactNode | ReactNode[];
  className?: string;
}

export const Screen: React.FC<IProps> = ({
  children,
  className,
}) => {
  return (
    <ScreenContainer className={ className }>
      { children }
    </ScreenContainer>
  );
};
