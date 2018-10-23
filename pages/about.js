import React, { Component } from 'react';
import styled from "styled-components";

import { media } from '../theme'
import Layout from '../global/Layout';

import Blue from '../assets/images/logo-blue.svg'
import Pink from '../assets/images/logo-pink.svg'

const Image = styled.img`
	width: ${props => props.size}px;
`

const About = styled.div`
	${tw` p-6 `}

	${media.md`
		${tw` flex justify-center items-center `}
	`}
`

class AboutComp extends Component {


	static async getInitialProps () {
	}

	render () {
		return (
			<Layout Footer={ () =>
				<div className="flex justify-between p-4">
					<span><a href="https://twitter.com/SoccerPainters" className="text-black no-underline">Twitter</a></span>
					<span><a href="https://www.instagram.com/soccerpainters/" className="text-black no-underline">Instagram</a></span>
				</div>
			}>
				<About>
					<div>
						<div className="relative">
							<p className="md:text-center md:text-xl md:leading-loose z-20">
								Soccer Painters began life as a amateur football team, established by graduates of the University of the Arts London in 2017. 
								As well as spraying balls on at the weekend, we are building a community of footballing creatives (team of 10s).
								Our aim is to collaborate and create using music, journalism, apparel and photography to explore the love of the beautiful game. 
								Don’t hesitate to get in contact if you’d be interested in working with us or can produce ‘unbelievable tekkers’ on Sunday mornings.
							</p>
						</div>
						<div className="flex justify-between">
							<div><Image size="75" src={Blue} alt="Logo-Blue" /></div>
							<div><Image size="100" src={Pink} alt="Logo-Pink" /></div>
						</div>
						
					</div>
				</About>
			</Layout>
		)
	}
}

export default AboutComp;