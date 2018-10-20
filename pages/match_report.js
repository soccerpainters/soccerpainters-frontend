import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { config } from "../config.js";
import styled from "styled-components";
import { media } from '../theme';
import Image from '../global/Image';
import Layout from '../global/Layout';

const Article = styled.article`
	${tw` w-full p-4 text-grey-darker `}
	font-family: PT Sans;

	${ media.md`
		${tw` text-xl leading-tight `}
		flex: 1;
	`}
`;

const Aside = styled.aside`
	${tw` text-center mt-8 md:mt-20 px-4 `}

	${ media.md`
		flex: 1;
		px-0;
	`}
`;

const AltText = styled.span`
	${tw` text-xs text-grey-darker `}
	font-family: PT Sans;
`;

const TeamScore = styled.span`
	
	${tw` uppercase text-lg mb-2 inline-block`};
	
	${ media.md`
		${tw` text-xl `}
	`}
`;

const Title = styled.h2`
	${tw` my-4 text-black `}
`


/**
 * Match Report Page.
 */
class MatchReport extends Component {
	static async getInitialProps (context) {

		// Take Slug provided by server.js
		const { slug } = context.query;

		// Fetch the relevant match report
		const res = await fetch(
			`${config.apiUrl}/wp-json/wp/v2/match_report?slug=${slug}`
		);
		const matchReport = await res.json();

		// Attach to props. If not found, return empty array for error.
		return { matchReport: (matchReport[0]) ? matchReport[0] : [] };
	}

	render () {
		if (!this.props.matchReport.title) return <Error statusCode={404} />;

		const {
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
						<div className="m-4">
							<div className="mb-1">
								<TeamScore>{`${home_team} ${home_team_score}`}</TeamScore>
								<br />
								<TeamScore>{`${away_team} ${away_team_score}`}</TeamScore>
							</div>
							<AltText>MOTM: {man_of_the_match}</AltText>
							<br />
							<AltText>Words by {author}</AltText>
						</div>
					</Aside>
					<Article>
						<Title>{this.props.matchReport.title.rendered}</Title>
						<div dangerouslySetInnerHTML={{
							__html: this.props.matchReport.content.rendered
						}} />
					</Article>

				</div>
			</Layout>
		);
	}
}

export default MatchReport;
