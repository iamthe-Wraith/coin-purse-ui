import React from 'react';
import { H1 } from '../../styles';
import { ComingSoonMessagingContainer } from './styles';

interface IProps {
  className?: string;
}

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
