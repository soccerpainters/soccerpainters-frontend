import React, { Component } from 'react';
import CenterScreen from '../global/CenterScreen';

class Shop extends Component {


	static async getInitialProps () {
	}

	render () {
		return (
			<>
				<CenterScreen className="py-16">
					<span className="text-2xl">Coming soon...</span>
				</CenterScreen>

			</>
		)
	}
}

export default Shop;
