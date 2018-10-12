const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
module.exports = withCSS(withFonts(withImages({
	webpack (config, { buildId, dev, isServer, defaultLoaders }) {
		return config
	}
})));