import React, { Component } from 'react';
import { Flex } from 'rebass';

import { getPosts, getMatchReports, getNewsBanner } from '../services/wordpress';
import Card from '../global/Card';
import Footer from '../global/Footer';
import Marquee from "../global/Marquee";

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

		/* Banner Text
		---------------------------------------------------- */
		const banner = await getNewsBanner();

		return {
			feed,
			banner
		};
	}

	render () {
		return (
			<>
				<Flex>
					{
						this.props.feed.map(feedItem => {
							return <Card key={feedItem.id} feedItem={feedItem} />
						})
					}
				</Flex>
				<Footer>
					<Marquee text={this.props.banner.title.rendered} />
				</Footer>
			</>
		)
	}
}

export default Index;
