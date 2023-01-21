import { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: ${theme.colors.neutral[100]};
    box-sizing: border-box;
  }
`;

export const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FlexCenter = css`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const FlexCol = css`
  display: flex;
  flex-direction: column;
`;

export const FlexColCenter = css`
  ${FlexCol}
  align-items: center;
`;

export const FlexHorizontalCenter = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const NoScrollBar = css`
  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;
`;