import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Error from "next/error";
import { config } from "../config.js";

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

		return (
			<>
				<h1>{this.props.matchReport.title.rendered}</h1>
				<div
					dangerouslySetInnerHTML={{
						__html: this.props.matchReport.content.rendered
					}}
				/>
			</>
		);
	}
}

export default MatchReport;
