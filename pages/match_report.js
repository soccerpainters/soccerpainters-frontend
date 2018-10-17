import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { config } from "../config.js";
import styled from "styled-components";
import { media } from '../theme'

const Article = styled.article`
	${tw` w-full p-4 `}
	font-family: Helvetica;



	${ media.md`
		flex: 1;
	`}
`;

const Aside = styled.aside`
	${tw` text-center mt-20 `}

	${ media.md`
		flex: 1;
	`}
`;

const Image = styled.img`
	${tw`  `}
	max-width: 100%;
	max-height: 450px;
`;

const AltText = styled.span`
	${tw` text-xs `}
	font-family: Helvetica;
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
			`${config.apiUrl}/wp-json/wp/v2/match_report?slug=${slug}`
		);
		const matchReport = await res.json();

		// Attach to props. If not found, return empty array for error.
		return { matchReport: (matchReport[0]) ? matchReport[0] : [] };
	}

	render () {
		if (!this.props.matchReport.title) return <Error statusCode={404} />;

		console.log(this.props.matchReport);

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
			<div className="md:flex md:flex-grow">
				<Aside>
					<Image src={image} alt={this.props.matchReport.title} />
					<div className="m-4">
						<span>{`${home_team} ${home_team_score}`}</span>
						<br/>
						<span>{`${away_team} ${away_team_score}`}</span>
						<br/>
						<br/>
						<AltText>MOTM: {man_of_the_match}</AltText>
						<br/>
						<AltText>Words by {author}</AltText>
					</div>
				</Aside>
				<Article
					dangerouslySetInnerHTML={{
						__html: this.props.matchReport.content.rendered
					}}
				/>

			</div>
		);
	}
}

export default MatchReport;
