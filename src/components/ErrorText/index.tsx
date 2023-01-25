import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';

interface IProps extends IBaseProps {}

const ErrorTextContainer = styled.p`
  font-size: 0.8rem;
  color: ${theme.colors.error};
`;

export const ErrorText: React.FC<IProps> = ({
  children,
  className = '',
  dataCy = '',
}) => {
  return (
    <ErrorTextContainer
      className={ className }
      data-cy={ dataCy }
    >
      { children }
    </ErrorTextContainer>
  );
};
