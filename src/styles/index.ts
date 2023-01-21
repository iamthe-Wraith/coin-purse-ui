import styled, { createGlobalStyle, css } from 'styled-components';
import { theme } from './theme';

// FONTS
export const AccentFont = css`
  font-family: "Shadows Into Light", sans-serif;
`;

export const BodyFont = css`
  font-family: "Open Sans", sans-serif;
`;

export const HeaderFont = css`
  font-family: "Bebas Neue", sans-serif;
`;

// LAYOUT
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

// ACCENT
export const AccentText = styled.span`
  color: ${theme.colors.secondary[400]};
`;

export const AltAccentText = styled.span`
  color: ${theme.colors.tertiary[400]};
`;

// HEADERS
const headerStyles = css`
  ${HeaderFont}
  color: ${theme.colors.primary[400]};
`;

export const header1Styles = css`
  ${headerStyles}
  font-size: 4rem;
`;

export const H1 = styled.h1`
  ${header1Styles}
`;

export const header2Styles = css`
  ${headerStyles}
  font-size: 3.5rem;
`;

export const H2 = styled.h2`
  ${header2Styles}
`;

export const header3Styles = css`
  ${headerStyles}
  font-size: 3rem;
`;

export const H3 = styled.h3`
  ${header3Styles}
`;

export const header4Styles = css`
  ${headerStyles}
  font-size: 2.5rem;
`;

export const H4 = styled.h4`
  ${header4Styles}
`;

export const header5Styles = css`
  ${headerStyles}
  font-size: 2rem;
`;

export const H5 = styled.h5`
  ${header5Styles}
`;

export const header6Styles = css`
  ${headerStyles}
  font-size: 1.5rem;
`;

export const H6 = styled.h6`
  ${header6Styles}
`;

// GLOBAL
export const GlobalStyles = createGlobalStyle`
  * {
    ${BodyFont}
    margin: 0;
    padding: 0;
    color: ${theme.colors.neutral[100]};
    box-sizing: border-box;
  }
`;