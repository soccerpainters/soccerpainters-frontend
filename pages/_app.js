import "../assets/css/style.css";
import React from "react";
import App, { Container } from "next/app";
import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import theme from '../theme';
import Favicon from '../global/Favicon';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
	NProgress.done();
});

Router.events.on('routeChangeError', () => {
	NProgress.done();
});

import { getMainMenu, getNewsBanner } from '../services/wordpress';

export default class MyApp extends App {

	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {}

		const menu = await getMainMenu();

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return {
			router,
			menu,
			pageProps
		};
	}

	render () {
		const { Component, pageProps, menu, router } = this.props;

		// Banner is only visible on Index page.
		const hideBanner = router.asPath !== "/";

		return (
			<Container>
				<Head>
					<title>Official Soccer Painters Site</title>
					<Favicon />
				</Head>
				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</Container>
		);
	}
}
