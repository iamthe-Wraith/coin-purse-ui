import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';

interface IProps extends IBaseProps {}

const ScreenContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.neutral[700]};
`;

export const Screen: React.FC<IProps> = ({
  children,
  className,
  dataCy,
}) => {
  return (
    <ScreenContainer className={ className } data-cy={ dataCy }>
      { children }
    </ScreenContainer>
  );
};
