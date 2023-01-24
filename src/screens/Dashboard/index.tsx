import React from 'react';
import styled from 'styled-components';
import { IBaseProps } from '../../types/fc';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

const DashboardContainer = styled(Screen)``;

export const Dashboard: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <DashboardContainer className={ className }>
      temp Dashboard
    </DashboardContainer>
  );
};
