import React from 'react';
import { NotFoundContainer } from './styles';

interface IProps {
  className?: string;
}

export const NotFound: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <NotFoundContainer className={ className }>
      temp NotFound
    </NotFoundContainer>
  );
};
