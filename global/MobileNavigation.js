import React, { Component } from 'react';
import styled from "styled-components";
import Link from 'next/link';

const Modal = styled.div`
	${tw` absolute pin-t w-screen h-screen bg-blue z-20 flex flex-col justify-center items-center `}

	a{
		${tw` text-black no-underline my-8`}
	}
`;

export default class MobileNavigation extends Component {

	constructor(props) {
		super(props);

		this.state = {
			isModalOpen: true
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
					<button onClick={this.handleModalClick}>Click</button>
				</div>
				{this.state.isModalOpen && <Modal>
					<div className="absolute pin-t mt-8">
						<button onClick={this.handleModalClick}>Close</button>
					</div>
					<Link href="/"><a onClick={this.handleModalClick}>Home</a></Link>
					<Link href="/about"><a onClick={this.handleModalClick}>About</a></Link>
					<Link href="/shop"><a onClick={this.handleModalClick}>Shop</a></Link>
				</Modal>}
			</div>
		)
	}
}
