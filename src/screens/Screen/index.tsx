import React from 'react';
import styled from 'styled-components';
import { MainNav, MainNavWidth } from '../../components/MainNav';
import { FlexHorizontalCenter } from '../../styles';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';

interface IProps extends IBaseProps {
  hideNav?: boolean;
}

const ScreenContainer = styled.div`
  ${FlexHorizontalCenter}
  flex-direction: row-reverse;
  width: 100vw;
  height: 100vh;
  background: ${theme.colors.neutral[700]};
  overflow: hidden;
`;

const MainContainer = styled.div`
  width: calc(100vw - ${MainNavWidth});
  height: 100vh;
  overflow: auto;

  &.hide-nav {
    width: 100vw;
  }
`;

export const Screen: React.FC<IProps> = ({
  children,
  className,
  dataCy,
  hideNav,
}) => {
  return (
    <ScreenContainer className={ className } data-cy={ dataCy }>
      { !hideNav && <MainNav /> }
      <MainContainer className={ hideNav ? 'hide-nav' : '' }>
        { children }
      </MainContainer>
    </ScreenContainer>
  );
};
