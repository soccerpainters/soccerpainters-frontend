import React from "react";
import Layout from './Layout';
import { getMainMenu } from '../services/wordpress';

const PageWrapper = Comp => (
	class extends React.Component {
		static async getInitialProps (args) {
			const menu = await getMainMenu();
			return {
				menu,
				...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null),
			};
		}

		render () {
			return (
				<Layout menu={this.props.menu}>
					<Comp {...this.props} />
				</Layout>
			)
		}
	}
)

export default PageWrapper;
