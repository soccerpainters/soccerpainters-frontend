import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import getConfig from 'next/config';
const { publicRuntimeConfig: config } = getConfig();

class Post extends Component {
	static async getInitialProps (context) {
		const { slug, apiRoute } = context.query;
		const res = await fetch(
			`${config.wordpressUrl}/wp-json/postlight/v1/${apiRoute}?slug=${slug}`
		);
		const post = await res.json();
		return { post };
	}

	render () {
		if (!this.props.post.title) return <Error statusCode={404} />;

		return (
			<>
				<h1>{this.props.post.title.rendered}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: this.props.post.content.rendered
					}}
				/>
			</>
		);
	}
}

export default Post;
