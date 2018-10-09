import React from 'react';

import styled from "styled-components";
import { Box } from "rebass";

const Container = styled(Box)`
	overflow: hidden;
`

const Marquee = styled(Box)`
	display:block;
	position:relative;
	animation: scroll 10s linear infinite;

	&:hover {
		animation-play-state: paused
	}

	@keyframes scroll{
		0% {left: 100%;}
		100% {left: -100%;}
	}
`

const MarqueeComp = (props) => (
	<Container>
		<Marquee>
			<h3>Soccer Painters 3 - 0 Hackney Harriers</h3>
		</Marquee>
	</Container>
)

export default MarqueeComp;