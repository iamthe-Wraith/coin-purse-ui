import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeType } from '../../types';
import { theme } from '../theme';

interface IStyledLinkProps {
  kind?: ThemeType;
}

export const StyledLink = styled(Link)<IStyledLinkProps>`
  text-decoration: none;
  outline: none;

  ${({ kind }) => {
    let color: string;
    let engagedColor: string;

    switch (kind) {
      case 'neutral':
        color = theme.colors.neutral[400];
        engagedColor = theme.colors.neutral[700];
        break;
      case 'secondary':
        color = theme.colors.secondary[400];
        engagedColor = theme.colors.secondary[700];
        break;
      case 'tertiary':
        color = theme.colors.tertiary[400];
        engagedColor = theme.colors.tertiary[700];
        break;
      default:
        color = theme.colors.primary[400];
        engagedColor = theme.colors.primary[700];
        break;
    }

    return `
      color: ${color};

      &:hover,
      &:focus,
      &:focus-within {
        color: ${engagedColor};
        text-decoration: underline;
      }

      &:hover {
        cursor: pointer;
      }

      &:focus,
      &:focus-within {
        outline: 1px dashed ${engagedColor};
      }
    `;
  }}
`;