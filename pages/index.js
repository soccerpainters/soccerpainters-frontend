import React, { Component } from 'react';
import { Flex } from 'rebass';

import { getPosts, getMatchReports } from '../services/wordpress';
import Card from '../global/Card';
import Footer from '../global/Footer';
import Marquee from "../global/Marquee";

class Index extends Component {

	static async getInitialProps () {

		const matchReports = await getMatchReports();
		const posts = await getPosts();
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
				<Flex>
					{
						this.props.feed.map(feedItem => {
							return <Card key={feedItem.id} feedItem={feedItem} />
						})
					}
				</Flex>
				<Footer>
					<Marquee />
				</Footer>
			</>
		)
	}
}

export default Index;
