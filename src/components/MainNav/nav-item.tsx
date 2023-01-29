import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Popover } from 'react-tiny-popover';
import { MainRoutes } from '../../routers/config';
import { IBaseProps } from '../../types/fc';
import { theme } from '../../styles/theme';

interface IProps extends IBaseProps {
  text?: string;
  to: MainRoutes;
}

const NavItemContainer = styled(Link)`
  &:not(:last-child) {
    margin-bottom: 12px;
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const NavItemText = styled.div`
  margin-right: 16px;
  padding: 4px 12px;
  font-size: 0.8rem;
  background: ${theme.colors.neutral[900]};
  border: 1px solid ${theme.colors.primary[400]};
  border-radius: 4px;
`;

export const NavItem: React.FC<IProps> = ({
  children,
  className = '',
  dataCy = '',
  text,
  to,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderText = useCallback(() => {
    return (
      <NavItemText>
        { text }
      </NavItemText>
    );
  }, [text]);

  const toggleOpen = useCallback(() => {
    setIsOpen(!!text && !isOpen);
  }, [isOpen]);

  return (
    <Popover
      isOpen={ isOpen }
      content={ renderText() }
      onClickOutside={ toggleOpen }
      positions={ ['left'] }
    >
      <NavItemContainer
        className={ className }
        data-cy={ dataCy }
        to={ to }
        onMouseEnter={ toggleOpen }
        onMouseLeave={ toggleOpen }
      >
        { children }
      </NavItemContainer>
    </Popover>
  );
};
