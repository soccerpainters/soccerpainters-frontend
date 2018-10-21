import React, { Component } from 'react';
import StackGrid from "react-stack-grid";
import Card from './Card';
import theme from "../tailwind";

export default class Grid extends Component {
	constructor(props) {
		super(props);
	}

	respondToScreen (screenSize) {
		if (screenSize < theme.views.md) {
			return "100%";
		} else if (screenSize < theme.views.lg) {
			return "50%";
		} else {
			return "33%";
		}
	}

	render () {
		return (
			<>
				<StackGrid
					columnWidth={this.respondToScreen(this.props.screen)}
					gutterWidth={50}
					gutterHeight={50}
					monitorImagesLoaded={true}
					enableSSR={true}
				>
					{
						this.props.feed.map(feedItem => {
							return <Card key={feedItem.id} feedItem={feedItem} />
						})
					}
				</StackGrid>
			</>
		)
	}
}
