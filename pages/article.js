import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { config } from "../config.js";

/**
 * Article Page.
 */
class Article extends Component {
	static async getInitialProps (context) {

		// Take Slug provided by server.js
		const { slug } = context.query;

		// Fetch the relevant article
		const res = await fetch(
			`${config.apiUrl}/wp-json/wp/v2/article?slug=${slug}`
		);
		const article = await res.json();

		// Attach to props. If not found, return empty array for error.
		return { article: (article[0]) ? article[0] : [] };
	}

	render () {
		if (!this.props.article.title) return <Error statusCode={404} />;

		return (
			<>
				<h1>{this.props.article.title.rendered}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: this.props.article.content.rendered
					}}
				/>
			</>
		);
	}
}

export default Article;
