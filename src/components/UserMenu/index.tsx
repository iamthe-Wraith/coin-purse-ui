import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { Popover } from 'react-tiny-popover';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';
import { DefaultAvatar } from '../svgs/icons/DefaultAvatar';
import { Link } from 'react-router-dom';
import { FlexCol } from '../../styles';
import { MainRoutes } from '../../routers/config';



interface IProps extends IBaseProps {}

const Menu = styled.div`
  ${FlexCol}
  margin: 0 12px 12px 0;
  border: 1px solid ${theme.colors.primary[400]};
  border-radius: 4px;
  background: ${theme.colors.neutral[900]};
`;

const MenuLink = styled(Link)`
  display: block;
  width: 15rem;
  padding: 4px 8px;
  font-size: 0.9rem;
  color: ${theme.colors.neutral[100]};
  text-decoration: none;
  transition: .25s ease-in-out;

  &:hover {
    color: ${theme.colors.primary[400]};
  }
`;

const Trigger = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${theme.colors.neutral[100]};
  border-radius: 50%;
  background: none;
  overflow: hidden;
  transition: .25s ease-in-out;

  &:hover,
  &:focus,
  &:focus-within,
  &.open {
    border-color: ${theme.colors.primary[400]};

    svg {
      fill: ${theme.colors.primary[400]};
    }
  }

  svg {
    width: 100%;
    height: 100%;
    transition: .25s ease-in-out;
  }
`;

const UserMenuContainer = styled.div`
  position: relative;
`;

export const UserMenu: React.FC<IProps> = ({
  className = '',
  dataCy = 'user-menu',
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderMenu = () => {
    return (
      <Menu data-cy={ `${dataCy}-popover` }>
        <MenuLink
          to={ MainRoutes.PROFILE_SETTINGS }
          data-cy={ `${dataCy}-profile` }
        >
          Profile Settings
        </MenuLink>
        <MenuLink
          to={ MainRoutes.INCOME_CONFIG }
          data-cy={ `${dataCy}-income-config` }
        >
          Income Configurations
        </MenuLink>
        <MenuLink
          to={ MainRoutes.BILLS_CONFIG }
          data-cy={ `${dataCy}-bills-config` }
        >
          Bills Configurations
        </MenuLink>
      </Menu>
    );
  };
  
  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <UserMenuContainer
      className={ className }
      data-cy={ dataCy }
    >
      <Popover
        isOpen={ isOpen }
        content={ renderMenu() }
        onClickOutside={ toggleMenu }
        positions={ ['top'] }
      >
        <Trigger
          className={ isOpen ? 'open' : '' }
          onClick={ toggleMenu }
          data-cy={ `${dataCy}-trigger` }
        >
          <DefaultAvatar />
        </Trigger>
      </Popover>
    </UserMenuContainer>
  );
};
