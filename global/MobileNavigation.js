import React, { Component } from 'react';
import styled from "styled-components";
import Link from 'next/link';
import IconOpen from '../assets/images/icon-open.svg';
import IconClose from '../assets/images/icon-close.svg';

const Modal = styled.div`
	${tw` fixed pin-t w-screen h-screen bg-white z-20 flex flex-col justify-center items-center `}

	a{
		${tw` text-black no-underline my-8`}
	}
`;

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
			<div className="bg-white">
				<div className="flex justify-center my-8">
					<button onClick={this.handleModalClick}><img className="h-12 w-12" src={IconOpen} alt="Menu"/></button>
				</div>
				{this.state.isModalOpen && <Modal>
					<div className="absolute pin-t mt-10">
						<button onClick={this.handleModalClick}><img className="h-8 w-18" src={IconClose} alt="Close" /></button>
					</div>
					<Link href="/"><a onClick={this.handleModalClick}>Home</a></Link>
					<Link href="/about"><a onClick={this.handleModalClick}>About</a></Link>
					<Link href="/shop"><a onClick={this.handleModalClick}>Shop</a></Link>
				</Modal>}
			</div>
		)
	}
}
