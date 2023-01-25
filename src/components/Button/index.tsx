import React, { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { FlexCenter, HeaderFont } from '../../styles';
import { theme } from '../../styles/theme';
import { ThemeType } from '../../types';
import { IBaseProps } from '../../types/fc';
import { Spinner } from '../svgs/icons/Spinner';

interface IButtonStyleProps {
  kind?: ThemeType;
}

interface IButtonColorConfig {
  background: string;
  border: string;
  engagedBackground: string;
  engagedBorder: string;
}

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>,
  Omit<IBaseProps, 'children'>,
  IButtonStyleProps {
  processing?: boolean;
}

const ButtonContainer = styled.button<IButtonStyleProps>`
  ${FlexCenter}
  ${HeaderFont}
  min-width: 100px;
  padding: 8px 16px;
  font-size: 1.1rem;
  border-width: 1px;
  border-right-width: 4px;
  border-style: solid;
  border-radius: 4px;
  color: ${theme.colors.neutral[100]};
  transition: 0.25s ease-in-out;
  outline: none;

  &:disabled {
    border-color: ${theme.colors.neutral[400]};
    background: ${theme.colors.neutral[300]};
    opacity: 0.5;
  }
  
  ${({ kind }) => {
    let config: IButtonColorConfig;

    switch (kind) {
      case 'primary': {
        config = {
          background: theme.colors.primary[400],
          border: theme.colors.primary[600],
          engagedBackground: theme.colors.primary[700],
          engagedBorder: theme.colors.primary[900]
        };
        break;
      }
      case 'secondary': {
        config = {
          background: theme.colors.secondary[400],
          border: theme.colors.secondary[600],
          engagedBackground: theme.colors.secondary[700],
          engagedBorder: theme.colors.secondary[900]
        };
        break;
      }
      case 'tertiary': {
        config = {
          background: theme.colors.tertiary[400],
          border: theme.colors.tertiary[600],
          engagedBackground: theme.colors.tertiary[700],
          engagedBorder: theme.colors.tertiary[900]
        };
        break;
      }
      default: {
        config = {
          background: theme.colors.neutral[400],
          border: theme.colors.neutral[600],
          engagedBackground: theme.colors.neutral[600],
          engagedBorder: theme.colors.neutral[900]
        };
        break;
      }
    }

    return `
      border-color: ${config.border};
      background: ${config.background};

      &:hover:not(:disabled),
      &:focus:not(:disabled),
      &:focus-within:not(:disabled) {
        border-color: ${config.engagedBorder};
        background: ${config.engagedBackground};
      }

      &:hover:not(:disabled) {
        cursor: pointer;
      }

      &:focus-within:not(:disabled) {
        outline: 1px dashed ${config.background};
        outline-offset: 1px;
      }
    `;
  }}
`;

const ButtonSpinner = styled(Spinner)`
  width: 20px;
  height: 20px;
`;

export const Button: React.FC<IProps> = ({
  children,
  dataCy = '',
  processing,
  ...restProps
}) => {
  return (
    <ButtonContainer
      data-cy={ dataCy }
      { ...restProps }
    >
      {
        processing
          ? <ButtonSpinner animated={ processing } />
          : children
      }
    </ButtonContainer>
  );
};
