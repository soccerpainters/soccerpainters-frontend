import React, { Component } from 'react';
import { getMatchReports, getArticles } from '../services/wordpress';
import Grid from '../global/Grid';
import Responsive from '../global/Responsive';

class Index extends Component {

	static async getInitialProps () {

		const [ articles, matchReports ] = await Promise.all([getArticles(), getMatchReports()]);

		// Merge and and sort by date to create feed
		const feed = [...articles, ...matchReports].sort((a, b) => {
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
				<div className="p-6 block w-full">
					<Responsive>
						<Grid feed={this.props.feed} />
					</Responsive>
				</div>
			</>
		)
	}
}

export default Index;
