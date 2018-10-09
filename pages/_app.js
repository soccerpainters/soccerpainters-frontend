import React from "react";
import App, { Container } from "next/app";
import Head from 'next/head';
import Layout from '../global/Layout';

import { getMainMenu } from '../services/wordpress';

export default class MyApp extends App {

	static async getInitialProps ({ Component, router, ctx }) {
		let pageProps = {}

		const menu = await getMainMenu();

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return {
			menu,
			pageProps
		};
	}

	render () {
		const { Component, pageProps, menu } = this.props;
		return (
			<Container>
				<Head>
					<title>Official Soccer Painters Site</title>
				</Head>
				<Layout menu={menu}>
					<Component {...pageProps} />
				</Layout>
			</Container>
		);
	}
}
