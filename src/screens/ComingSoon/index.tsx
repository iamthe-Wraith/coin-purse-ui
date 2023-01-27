import React from 'react';
import styled from 'styled-components';
import { ComingSoonMessaging } from '../../components/ComingSoonMessaging';
import { FlexCenter } from '../../styles';
import { IBaseProps } from '../../types/fc';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

const ComingSoonContainer = styled(Screen)`
  ${FlexCenter}
`;

export const ComingSoon: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <ComingSoonContainer className={ className }>
      <ComingSoonMessaging />
    </ComingSoonContainer>
  );
};
