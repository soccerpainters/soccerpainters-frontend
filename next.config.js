
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

						// Specify the file extensions to include when scanning for
						// class names.
						extensions: ["js"]
					}
				],
				whitelistPatternsChildren: [/nprogress$/]
			}),
		);


		return config;
	},
	serverRuntimeConfig: { 
		wordpressUrl: process.env.WORDPRESS_URL
	},
	publicRuntimeConfig: {
		staticFolder: '/static',
		wordpressUrl: process.env.WORDPRESS_URL
	}
})));