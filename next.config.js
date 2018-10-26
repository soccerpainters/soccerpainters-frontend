
/* Load in correct config.
---------------------------------------------------- */
if (process.env.NODE_ENV !== "production") {
	require('dotenv').config();
} else {
	require('dotenv').config({ path: './.env.production' });
}

const path = require('path');
const glob = require('glob-all');

const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');

const PurgecssPlugin = require('purgecss-webpack-plugin');


class TailwindExtractor {
	static extract (content) {
		return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
	}
}

module.exports = withCSS(withFonts(withImages({

	/* WEBPACK CONFIGURATION
	---------------------------------------------------- */
	webpack (config, { buildId, dev, isServer, defaultLoaders }) {

		// Plugins
		config.plugins.push(
			new PurgecssPlugin({
				paths: glob.sync([
					"./pages/*.js",
					"./global/**/*.js"
				]),
				extractors: [
					{
						extractor: TailwindExtractor,
						extensions: ["js"]
					}
				],
				whitelistPatternsChildren: [/nprogress$/]
			}),
		);


		return config;
	},

	/* BUILD CONFIGURATION
	---------------------------------------------------- */
	serverRuntimeConfig: { 
		wordpressUrl: process.env.WORDPRESS_URL
	},
	publicRuntimeConfig: {
		staticFolder: '/static',
		appUrl: process.env.APP_URL,
		wordpressUrl: process.env.WORDPRESS_URL,
		isProduction: (process.env.NODE_ENV === "production"),
		logrocket: process.env.LOGROCKET,
		fbAppId: process.env.FB_APP_ID
	}
})));