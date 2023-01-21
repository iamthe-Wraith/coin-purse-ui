import { DefaultTheme } from 'styled-components';
import { colors } from './colors';

/**
 * ONLY USE HEX VALUES AND ALWAYS USE FORMAT: #XXXXXX
 *
 * there are transparencies calculated throughout app that will break if
 * any other color value type is used, or if format: #XXX is used.
 */

export const theme: DefaultTheme = {
  colors,
};
