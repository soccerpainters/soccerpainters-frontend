import React, { Component } from "react";
import Head from "next/head";
// import stylesheet from '../src/styles/style.scss'

import Navigation  from './Navigation';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render () {

		return (
			<div>
				<Head>
					<meta
						name="viewport"
						content="width=device-width, initial-scale=1"
					/>
					<meta charSet="utf-8" />
					<title>
						Soccer Painters
                    </title>
				</Head>
				<header>
					<Navigation menu={this.props.menu} />
				</header>
			</div>
		);
	}
}

export default Header;

// <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
