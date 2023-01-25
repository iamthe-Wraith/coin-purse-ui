import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { ThemeType } from '../../types';
import { IBaseProps } from '../../types/fc';

interface ICardStyleProps {
  type?: Exclude<ThemeType, 'neutral'>;
}

interface IProps extends IBaseProps, ICardStyleProps {}

const CardContainer = styled.div<ICardStyleProps>`
  padding: 10px;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;

  ${({ type }) => {
    let color: string;

    switch (type) {
      case 'primary':
        color = theme.colors.primary[400];
        break;
      case 'secondary': 
        color = theme.colors.secondary[400];
        break;
      case 'tertiary': 
        color = theme.colors.secondary[400];
        break;
      default:
        color = 'transparent';
        break;
    }

    if (!color) return '';

    return `border-color: ${color}`;
  }}
`;

export const Card: React.FC<IProps> = ({
  children,
  className = '',
  dataCy = '',
  type,
}) => {
  return (
    <CardContainer
      className={ className }
      data-cy={ dataCy }
      type={ type }
    >
      { children }
    </CardContainer>
  );
};
