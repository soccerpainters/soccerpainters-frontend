import React, { Component } from 'react';
import { getPosts, getMatchReports, getNewsBanner } from '../services/wordpress';
import Card from '../global/Card';
import PageEnd from '../global/PageEnd';
import Marquee from "../global/Marquee";
import StackGrid from "react-stack-grid";

class Index extends Component {


	static async getInitialProps () {

		/* Index News Feed 
		---------------------------------------------------- */
		// Get match reports
		const matchReports = await getMatchReports();

		// Get posts
		const posts = await getPosts();

		// Merge and and sort by date to create feed
		const feed = posts.concat(matchReports).sort((a, b) => {
			a = new Date(a.date);
			b = new Date(b.date);
			return a > b ? -1 : a < b ? 1 : 0;
		});

		return {
			feed
		};
	}

	render () {
		return (
			<>
				<div className="p-6">
					<StackGrid
						columnWidth={"100%"}
						gutterWidth={9}
						gutterHeight={9}
					>
						{
							this.props.feed.map(feedItem => {
								return <Card key={feedItem.id} feedItem={feedItem} />
							})
						}
					</StackGrid>
				</div>
			</>
		)
	}
}

export default Index;
