import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { IBaseProps } from '../../types/fc';

type CardType = 'primary' | 'secondary' | 'tertiary';

interface ICardStyleProps {
  type?: CardType;
}

interface IProps extends IBaseProps, ICardStyleProps {}

const CardContainer = styled.div<ICardStyleProps>`
  ${({ type }) => {
    let color: string;

    switch (type) {
      case 'secondary': 
        color = theme.colors.secondary[400];
        break;
      case 'tertiary': 
        color = theme.colors.secondary[400];
        break;
      default:
        color = theme.colors.primary[400];
        break;
    }

    return `border: 1px solid ${color}`;
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
