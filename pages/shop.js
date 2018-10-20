import React, { Component } from 'react';
import CenterScreen from '../global/CenterScreen';
import Layout from '../global/Layout';

class Shop extends Component {


	static async getInitialProps () {
	}

	render () {
		return (
			<Layout>
				<CenterScreen className="py-16">
					<span className="text-2xl uppercase">Coming soon</span>
				</CenterScreen>
			</Layout>
		)
	}
}

export default Shop;
