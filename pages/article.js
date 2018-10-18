import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { config } from "../config.js";
import styled from "styled-components";
import { media } from '../theme';
import { createThumbnail } from '../helpers/cloudinary';
import Image from '../global/Image';

const Article = styled.article`
	${tw` md:w-1/2 m-auto p-4 text-grey-darker `}
	font-family: PT Sans;

	${ media.md`
		${tw` text-xl leading-normal `}
		flex: 1;
	`}
`;

const Aside = styled.aside`
	${tw` text-center `}

	img {
		${tw` mt-1 `}
	}

	${ media.md`
		${tw` mt-8 mt-20 px-4 `}
		flex: 1;
		px-0;
	`}
`;

const AltText = styled.span`
	${tw` text-xs text-grey-darker `}
	font-family: PT Sans;
`;

const Title = styled.h2`
	${tw` uppercase text-xl mb-2 inline-block text-black`};
`;


/**
 * Article Page.
 */
class ArticleComp extends Component {
	static async getInitialProps (context) {

		// Take Slug provided by server.js
		const { slug } = context.query;

		// Fetch the relevant match report
		const res = await fetch(
			`${config.apiUrl}/wp-json/wp/v2/article?slug=${slug}`
		);
		const article = await res.json();

		// Attach to props. If not found, return empty array for error.
		return { article: (article[0]) ? article[0] : [] };
	}

	render () {
		if (!this.props.article.title) return <Error statusCode={404} />;

		const {
			author,
			image
		} = this.props.article.acf;

		return (
			<div>
				<Aside>
					<Image className="w-full md:w-3/5 mb-2" src={image} alt={this.props.article.title.rendered} />
					<div className="m-4 md:mx-auto md:w-1/2">
						<Title>{this.props.article.title.rendered}</Title>
						<br/>
						<AltText>Words by {author}</AltText>
					</div>
				</Aside>
				<Article
					dangerouslySetInnerHTML={{
						__html: this.props.article.content.rendered
					}}
				/>

			</div>
		);
	}
}

export default ArticleComp;
