import { css } from 'styled-components';

const theme = {
	fontSizes: [
		12, 14, 16, 20, 24, 32, 48, 64
	],
	colors: {
		blue: '#07c',
		lightgray: '#f6f6ff'
	},
	space: [
		0, 4, 8, 16, 32, 64, 128, 256
	],
	fonts: {
		sans: 'system-ui, sans-serif',
		mono: 'Menlo, monospace',
	},
	shadows: {
		small: '0 0 4px rgba(0, 0, 0, .125)',
		large: '0 0 24px rgba(0, 0, 0, .125)'
	},
	sizes: {
		xs: "480",
		sm: "768",
		md: "992",
		lg: "1200"
	}
}

export default theme;

export const media = Object.keys(theme.sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
    @media (min-width: ${theme.sizes[label]}px) {
      ${css(...args)}
    }
  `
	return acc
}, {});