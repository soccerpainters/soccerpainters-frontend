import "../assets/css/style.css";
import React from "react";
import App, { Container } from "next/app";
import Head from 'next/head';
import { ThemeProvider } from 'styled-components'
import Layout from '../global/Layout';
import theme from '../theme';

import { getMainMenu, getNewsBanner } from '../services/wordpress';

export default class MyApp extends App {

	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {}

		const menu = await getMainMenu();

		const banner = await getNewsBanner();

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return {
			router,
			menu,
			banner,
			pageProps
		};
	}

	render () {
		const { Component, pageProps, menu, router, banner } = this.props;

		// Banner is only visible on Index page.
		const hideBanner = router.asPath !== "/";

		return (
			<Container>
				<Head>
					<title>Official Soccer Painters Site</title>
				</Head>
				<ThemeProvider theme={theme}>
					<Layout bannerText={banner} hideBanner={hideBanner} menu={menu}>
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</Container>
		);
	}
}
