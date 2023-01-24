import React from 'react';
import styled from 'styled-components';
import { FlexCenter } from '../../styles';
import { IBaseProps } from '../../types/fc';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

const SignupContainer = styled(Screen)`
  ${FlexCenter}
`;

export const Signup: React.FC<IProps> = ({
  className = '',
}) => {
  return (
    <SignupContainer className={ className }>
      temp Signup
    </SignupContainer>
  );
};
