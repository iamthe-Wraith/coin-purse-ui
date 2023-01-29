import React from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MainRoutes } from '../../routers/config';
import { FlexColCenter, HeaderFont } from '../../styles';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';
import { Chart } from '../svgs/icons/Chart';
import { DollarSign } from '../svgs/icons/DollarSign';
import { UserMenu } from '../UserMenu';
import { NavItem } from './nav-item';

interface IProps extends IBaseProps {}

export const MainNavWidth = '70px';

const LinksWrapper = styled.div`
  ${FlexColCenter}
`;

const LogoLink = styled(Link)`
  ${HeaderFont}
  margin-bottom: 20px;
  padding-bottom: 12px;
  font-size: 3rem;
  border-bottom: 1px solid ${theme.colors.neutral[400]};
  color: ${theme.colors.neutral[100]};
  text-decoration: none;

  &.selected {
    color: ${theme.colors.primary[400]};
  }
`;

const MainNavContainer = styled.nav`
  ${FlexColCenter}
  justify-content: space-between;
  width: ${MainNavWidth};
  height: 100vh;
  padding: 20px 4px;
  background: ${theme.colors.neutral[800]};
`;

export const MainNav: React.FC<IProps> = ({
  className = '',
  dataCy = '',
}) => {
  const location = useLocation();

  return (
    <MainNavContainer
      className={ className }
      data-cy={ dataCy }
    >
      <LinksWrapper>
        <LogoLink
          className={ location.pathname.includes(MainRoutes.DASHBOARD) ? 'selected' : '' }
          to={ MainRoutes.DASHBOARD }
        >
          CP
        </LogoLink>
        <NavItem
          text='Pay Bills'
          to={ MainRoutes.PAY_BILLS }
        >
          <DollarSign fill={ location.pathname.includes(MainRoutes.PAY_BILLS) ? theme.colors.primary[400] : theme.colors.neutral[100] } />
        </NavItem>
        <NavItem
          text='Reports'
          to={ MainRoutes.REPORTS }
        >
          <Chart fill={ location.pathname.includes(MainRoutes.REPORTS) ? theme.colors.primary[400] : theme.colors.neutral[100] } />
        </NavItem>
      </LinksWrapper>
      <LinksWrapper>
        <UserMenu />
      </LinksWrapper>
    </MainNavContainer>
  );
};
