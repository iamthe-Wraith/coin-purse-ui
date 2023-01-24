import React from 'react';
import styled from 'styled-components';
import { IBaseProps } from '../../types/fc';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

const NotFoundContainer = styled(Screen)``;

export const NotFound: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <NotFoundContainer className={ className }>
      temp NotFound
    </NotFoundContainer>
  );
};
