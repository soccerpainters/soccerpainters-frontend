import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Error from "next/error";
import getConfig from 'next/config';
import styled from "styled-components";
import { format } from 'date-fns'
import { SizeMe } from 'react-sizeme';
import { media } from '../theme';
import theme from '../tailwind';
import Image from '../global/Image';
import Layout from '../global/Layout';
import {
	TwitterShareButton,
	TwitterIcon,
	WhatsappShareButton,
	WhatsappIcon
} from 'react-share';
import FacebookShareButton from '../global/FacebookShareButton';
const { publicRuntimeConfig: config } = getConfig();

const Article = styled.article`
	${tw` md:w-1/2 m-auto p-4 text-grey-darker `}
	font-family: 'PT Sans', sans-serif;

	${ media.md`
		${tw` text-xl leading-normal mt-2 `}
		flex: 1;
	`}
`;

const Aside = styled.aside`
	${tw` text-center `}

	img {
		${tw` mt-1 `}
	}

	${ media.md`
		${tw` mt-8 mt-10 px-4 `}
		flex: 1;
		px-0;
	`}
`;

const AltText = styled.span`
	${tw` text-sm text-grey-darker `}
	font-family: 'PT Sans', sans-serif;
`;

const Title = styled.h2`
	${tw` uppercase text-xl mb-2 inline-block text-black`};
`;

const Box = styled.div`
	${tw` flex justify-center `}

	div {
		${tw` mx-1/2 `}
	}
`


/**
 * Article Page.
 */
class ArticleComp extends Component {
	static async getInitialProps (context) {

		// Take Slug provided by server.js
		const { slug } = context.query;

		// Fetch the relevant match report
		const res = await fetch(
			`${config.wordpressUrl}/wp-json/wp/v2/article?slug=${slug}`
		);
		const article = await res.json();

		const { originalUrl } = context.req || {}

		// Attach to props. If not found, return empty array for error.
		return { article: (article[0]) ? article[0] : [], slug };
	}

	render () {
		if (!this.props.article.title) return <Error statusCode={404} />;

		const title = this.props.article.title.rendered;

		const url = `${config.appUrl}/article/${this.props.slug}`;

		const {
			author,
			image,
			date
		} = this.props.article.acf;

		return (
			<>
				<Head>
					<title>{title}</title>
				</Head>
				<SizeMe>
					{({ size }) =>
						<Layout>
							<div>
								<Aside>
									<Image className="w-full md:w-3/5 mb-2" src={image} alt={title} />
									<div className="m-4 md:mx-auto md:w-1/2">
										<Title>{title}</Title>
										<br />
										<AltText>{format(date, "Qo MMMM YYYY")}</AltText>
										<br/>
										<AltText>Words by {author}</AltText>
										
									</div>
									<Box className="flex justify-center">
										<FacebookShareButton
											url={url}
											imageUrl={image}
											title={title}
											intro={title}
											type="article"
										/>
										<TwitterShareButton
											url={url}
											title={title}
											hashtags={["SoccerPainters"]}
										>
											<TwitterIcon size={32} round={true} />
										</TwitterShareButton>
										{(size.width < theme.views.md) ?
											<WhatsappShareButton url={url} title={title}>
												<WhatsappIcon size={32} round={true} />
											</WhatsappShareButton> :
											null
										}
									</Box>
								</Aside>
								<Article
									dangerouslySetInnerHTML={{
										__html: this.props.article.content.rendered
									}}
								/>
							</div>
						</Layout>
					}
				</SizeMe>
			</>
		);
	}
}

export default ArticleComp;
