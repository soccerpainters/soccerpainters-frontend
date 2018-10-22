import React, { Component } from 'react';
import { Spring } from 'react-spring';
import dynamic from 'next/dynamic';
import IconOpen from '../assets/images/icon-open.svg';

const Modal =  dynamic(() => import('./Modals/MobileNavigationModal'), {
	ssr: false,
	loading: () => null
});

export default class MobileNavigation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: false
		}
		this.handleModalClick = this.handleModalClick.bind(this);
	}

	handleModalClick () {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	render () {
		return (
			<nav className={`bg-white ${this.props.className}`}>
				<div className="flex justify-center my-2">
					<button onClick={this.handleModalClick}><img className="h-12 w-12" src={IconOpen} alt="Menu" /></button>
				</div>
				<Spring
					from={{ opacity: 0 }}
					to={{ opacity: 1 }}
				>
					{props =>
						<Modal style={props} isModalOpen={this.state.isModalOpen} onClick={this.handleModalClick} />
					}
				</Spring>
			</nav>
		)
	}
}
