import React from 'react';
import { H1 } from '../../styles';
import { ComingSoonContainer, ContentContainer } from './styles';

interface IProps {
  className?: string;
}

export const ComingSoon: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <ComingSoonContainer className={ className }>
      <ContentContainer>
        <H1>Coming Soon</H1>
        <p>Coin Purse is coming soon. Please check back later.</p>
      </ContentContainer>
    </ComingSoonContainer>
  );
};
