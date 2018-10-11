const withCSS = require('@zeit/next-css')
module.exports = withCSS({
	webpack (config, { buildId, dev, isServer, defaultLoaders }) {
		return config
	}
})