import React from 'react';
import styled from 'styled-components';
import { H1 } from '../../styles';
import { IBaseProps } from '../../types/fc';

interface IProps extends IBaseProps {}

const ComingSoonMessagingContainer = styled.div`
  max-width: calc(100% - 24px);
  text-align: center;
`;

export const ComingSoonMessaging: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <ComingSoonMessagingContainer
      className={ className }
      data-cy='coming-soon'
    >
      <H1 data-cy='coming-soon-header'>Coming Soon</H1>
      <p data-cy='coming-soon-text'>Coin Purse is coming soon. Please check back later.</p>
    </ComingSoonMessagingContainer>
  );
};
