import React from 'react';
import { DashboardContainer } from './styles';

interface IProps {
  className?: string;
}

export const Dashboard: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <DashboardContainer className={ className }>
      temp Dashboard
    </DashboardContainer>
  );
};
