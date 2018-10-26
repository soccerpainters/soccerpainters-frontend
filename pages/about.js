import React, { Component } from 'react';
import styled from "styled-components";

import { media } from '../theme'
import Layout from '../global/Layout';
import Logo from '../assets/images/logo.png'

const Image = styled.img`
	width: ${props => props.size}px;
`

const About = styled.div`
	${tw` p-6 text-sm leading-loose `}
	font-family: PT Sans;

	${media.md`
		${tw` flex justify-center items-center px-6 pb-20 pt-0 `}
	`}
`

class AboutComp extends Component {


	static async getInitialProps () {
	}

	render () {
		return (
			<Layout Footer={() =>
				<div className="flex justify-between p-4">
					<span><a href="https://twitter.com/SoccerPainters" className="text-black no-underline">Twitter</a></span>
					<span><a href="https://www.instagram.com/soccerpainters/" className="text-black no-underline">Instagram</a></span>
				</div>
			}>
				<About>
					<div>
						<div className="relative">
							<div className="text-center">
								<Image className="mx-auto" size="320" src={Logo} alt="Logo" />
							</div>
							<p className="md:text-center md:text-xl md:leading-loose z-20">
								Soccer Painters began life as a amateur football team, established by graduates of the University of the Arts London in 2017.
								As well as spraying balls on at the weekend, we are building a community of footballing creatives (team of 10s).
								Our aim is to collaborate and create using music, journalism, apparel and photography to explore the love of the beautiful game.
							</p>
							<br/>
							<p className="md:text-center md:text-xl md:leading-loose z-20">
								Don’t hesitate to get in <a href="mailto:soccerpainter@gmail.com" className="no-underline"><span className="text-secondary no-underline">contact</span></a> if you’d be interested in working with us or can produce ‘unbelievable tekkers’ on Sunday mornings.
							</p>
						</div>
					</div>
				</About>
			</Layout>
		)
	}
}

export default AboutComp;