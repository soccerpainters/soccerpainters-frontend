import React, { Component } from 'react';
import PageWrapper from '../global/PageWrapper';
import { getPosts, getMatchReports } from '../services/wordpress';

class Index extends Component {

	static async getInitialProps () {
		const matchReports = await getMatchReports();
		const posts = await getPosts();
		return {
			matchReports,
			posts
		};
	}

	render () {
		return (
			<div>
				Hello
			</div>
		)
	}
}

export default PageWrapper(Index);
