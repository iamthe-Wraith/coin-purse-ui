import React from 'react';
import { ComingSoonMessaging } from '../../components/ComingSoonMessaging';
import { ComingSoonContainer } from './styles';

interface IProps {
  className?: string;
}

export const ComingSoon: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <ComingSoonContainer className={ className }>
      <ComingSoonMessaging />
    </ComingSoonContainer>
  );
};
