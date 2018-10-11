import React from 'react';
import styled, { css } from "styled-components";
import { media } from '../theme';

const Container = styled.div`
	${tw` overflow-hidden `}
`

const Marquee = styled.div`

	${tw`block relative p-4`}

	@keyframes scroll {
		from { left: 100%; }
		to { left: -100%; }
	}

	animation: scroll 10s linear infinite;

	${media.sm`animation: scroll 15s linear infinite;`}

	${media.md`animation: scroll 20s linear infinite;`}

	${media.lg`animation: scroll 25s linear infinite;`}

	&:hover {
		animation - play - state: paused
	}
`


const MarqueeComp = (props) => (
	<Container>
		<Marquee>
			<h3 className="whitespace-no-wrap">{props.text}</h3>
		</Marquee>
	</Container>
)

export default MarqueeComp;


