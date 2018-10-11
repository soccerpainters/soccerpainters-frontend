const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts')
module.exports = withCSS(withFonts({
	webpack (config, { buildId, dev, isServer, defaultLoaders }) {
		return config
	}
}));