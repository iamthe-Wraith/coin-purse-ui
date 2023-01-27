import React from 'react';
import styled from 'styled-components';
import { IBaseProps } from '../../types/fc';
import { Screen } from '../Screen';

interface IProps extends IBaseProps {}

const LoginContainer = styled(Screen)``;

export const Login: React.FC<IProps> = ({
  className = '',
  dataCy = '',
}) => {
  return (
    <LoginContainer
      className={ className }
      data-cy={ dataCy }
    >
      temp Login
    </LoginContainer>
  );
};
