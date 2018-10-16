import { css } from 'styled-components';
import theme from './tailwind';

export default theme;

export const media = Object.keys(theme.screens).reduce((acc, label) => {
    acc[label] = (...args) => css`
    @media (min-width: ${theme.screens[label]}) {
      ${css(...args)}
    }
  `
    return acc
}, {});