import React from 'react';
import styled, { css } from "styled-components";
import { media } from '../theme';
import { Box } from "rebass";

const Container = styled(Box)`
	overflow: hidden;
`

const Marquee = styled(Box)`
	display:block;
	position:relative;
	animation: scroll 10s linear infinite;

	${media.sm`
		animation: scroll 15s linear infinite;
	`}

	${media.md`
		animation: scroll 20s linear infinite;
	`}

	${media.lg`
		animation: scroll 25s linear infinite;
	`}

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
			<h3>{props.text}</h3>
		</Marquee>
	</Container>
)

export default MarqueeComp;