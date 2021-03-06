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

		if (this.props.feed.length === 0) return <div className="text-center uppercase"><p>No posts yet.</p></div>;

		return (
			<>
				<StackGrid
					columnWidth={this.respondToScreen(this.props.screen)}
					gutterWidth={50}
					gutterHeight={50}
					monitorImagesLoaded={true}
					duration={0}
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
