import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import getConfig from 'next/config';
import styled from "styled-components";
import { media } from '../theme';
import Image from '../global/Image';
import Layout from '../global/Layout';

const { publicRuntimeConfig: config } = getConfig();

const Article = styled.article`
	${tw` w-full p-4 `}

	${ media.md`
		flex: 1;
	`}
`;

const Aside = styled.aside`
	${tw` text-center mt-4 md:mt-20 px-4 `}

	${ media.md`
		${tw` mt-8 `}
		flex: 1;
	`}
`;

const AltText = styled.span`
	${tw` text-sm inline-block mb-1/2 text-grey-darker leading-none`}
	font-family: PT Sans;
`;

const TeamScore = styled.span`
	${tw` uppercase text-lg mb-2 inline-block`};
	
	${ media.md`
		${tw` text-2xl `}
	`}
`;

const Intro = styled.h2`
	${tw` mb-4 mt-6 `}
	font-family: PT Sans;
	${ media.md`
		${tw` mt-8 `}
	`}
`

const Content = styled.div`
	${tw` text-grey-darker `}
	font-family: PT Sans;

	${ media.md`
		${tw` text-xl leading-tight `}
	`}
`;


/**
 * Match Report Page.
 */
class MatchReport extends Component {
	static async getInitialProps (context) {

		// Take Slug provided by server.js
		const { slug } = context.query;

		// Fetch the relevant match report
		const res = await fetch(
			`${config.wordpressUrl}/wp-json/wp/v2/match_report?slug=${slug}`
		);
		const matchReport = await res.json();

		// Attach to props. If not found, return empty array for error.
		return { matchReport: (matchReport[0]) ? matchReport[0] : [] };
	}

	render () {
		if (!this.props.matchReport.title) return <Error statusCode={404} />;

		const {
			intro,
			author,
			away_team,
			away_team_score,
			home_team,
			home_team_score,
			image,
			man_of_the_match
		} = this.props.matchReport.acf;

		return (
			<Layout>
				<div className="md:flex md:flex-grow mt-6">
					<Aside>
						<div className="mx-6 md:mx-0">
							<Image className="w-full md:w-3/5 mb-2" src={image} alt={this.props.matchReport.title} />
						</div>
					</Aside>
					<Article>
						<div>
							<div className="text-center md:text-left">
								<TeamScore>{`${home_team} ${home_team_score}`}</TeamScore>
								<br />
								<TeamScore>{`${away_team} ${away_team_score}`}</TeamScore>
							</div>
							<div className="text-center md:text-left">
								<AltText>MOTM: {man_of_the_match}</AltText>
								<br />
								<AltText>Words by {author}</AltText>
							</div>
						</div>
						<Intro>{intro}</Intro>
						<Content dangerouslySetInnerHTML={{
							__html: this.props.matchReport.content.rendered
						}} />
					</Article>

				</div>
			</Layout>
		);
	}
}

export default MatchReport;
