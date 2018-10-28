import React, { Component } from 'react';
import { getMatchReports, getArticles, getNewsBanner } from '../services/wordpress';
import Layout from '../global/Layout';
import Grid from '../global/Grid';
import Responsive from '../global/Responsive';
import Marquee from '../global/Marquee';

class Index extends Component {

	static async getInitialProps () {

		const [articles, matchReports, banner] = await Promise.all([getArticles(), getMatchReports(), getNewsBanner()]);

		// Merge and and sort by date to create feed
		const feed = [...articles, ...matchReports].sort((a, b) => {
			a = new Date(a.date);
			b = new Date(b.date);
			return a > b ? -1 : a < b ? 1 : 0;
		})
		// Filter out "Unpublished" Posts
		.filter(feedItem => feedItem.acf.published);

		return {
			feed,
			banner
		};
	}

	render () {
		const bannerText = this.props.banner.content.rendered;
		return (
			<>
				<Layout Footer={() => <Marquee text={bannerText} />}>
					<div className="p-6 block w-full pb-8">
						<Responsive>
							<Grid feed={this.props.feed} />
						</Responsive>
					</div>
				</Layout>
			</>
		)
	}
}

export default Index;
