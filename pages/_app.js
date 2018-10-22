import "../assets/css/style.css";
import React from "react";
import App, { Container } from "next/app";
import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import NProgress from 'nprogress';
import LogRocket from 'logrocket';
import Router from "next/router";
import withGA from "next-ga";
import getConfig from 'next/config';
import server from '../helpers/server';
import theme from '../theme';
import Favicon from '../global/Favicon';

const { publicRuntimeConfig: config } = getConfig();


if (config.isProduction) {
	LogRocket.init(config.logrocket);
}

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
	NProgress.done();
});

Router.events.on('routeChangeError', () => {
	NProgress.done();
});

import { getMainMenu } from '../services/wordpress';

class MyApp extends App {

	static async getInitialProps ({ Component, router, ctx: context }) {
		let pageProps = {}

		const menu = await getMainMenu();

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(context)
		}

		return {
			router,
			menu,
			pageProps,
			server: server(context)
		};
	}

	render () {
		const { Component, pageProps, router, server } = this.props;

		return (
			<Container>
				<Head>
					<title>Official Soccer Painters Site</title>
					<Favicon />
				</Head>
				<ThemeProvider theme={theme}>
					<Component server={server} {...pageProps} />
				</ThemeProvider>
			</Container>
		);
	}
}

export default withGA("UA-127933190-1", Router)(MyApp);
