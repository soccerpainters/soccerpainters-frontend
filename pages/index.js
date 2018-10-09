import React, { Component } from 'react';
import { getPosts, getMatchReports } from '../services/wordpress';
import Card from '../global/Card';

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
			<div>
				{
					this.props.feed.map(feedItem => {
						return <Card key={feedItem.id} feedItem={feedItem} />
					})
				}
			</div>
		)
	}
}

export default Index;
