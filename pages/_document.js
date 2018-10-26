import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";

injectGlobal`
    ${styledNormalize}

	body {
		font-family: "DrukWideMedium";
	}
`;

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const sheet = new ServerStyleSheet();
		const page = renderPage(App => props =>
			sheet.collectStyles(<App {...props} />)
		);
		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}

	render () {
		return (
			<html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta httpEquiv="x-ua-compatible" content="ie=edge" />
					<link href="https://fonts.googleapis.com/css?family=PT+Sans:400,700" rel="stylesheet"></link>
					{this.props.styleTags}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
