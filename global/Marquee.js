import React from 'react';
import styled, { css } from "styled-components";
import { SizeMe } from "react-sizeme";
import { media } from '../theme';

const Container = styled.div`
	${tw` overflow-hidden `}
`

const Marquee = styled.div`

	h3 {
		display: inline-block;
	}

	p {
		display: inline-block;
	}

	${tw`block relative p-4 uppercase inline-block`}

	@keyframes scroll {
		from { left: 100vw; }
		to { left: ${p => `-${p.width}px`}; }
	}

	animation: scroll 15s linear infinite;

	
	${media.sm`

		@keyframes scroll {
			from { left: 100%; }
			to { left: -100%; }
		}

		animation: scroll 15s linear infinite;
	
	`}

	${media.md`animation: scroll 20s linear infinite;`}

	${media.lg`animation: scroll 25s linear infinite;`}

	&:hover {
		animation - play - state: paused
	}
`


const MarqueeComp = (props) => (
	<Container>
		<SizeMe>
			{({ size }) =>
				<Marquee width={size.width}>
					<h3 className="whitespace-no-wrap" dangerouslySetInnerHTML={{
						__html: props.text
					}} />
				</Marquee>
			}
		</SizeMe>
	</Container>
)

export default MarqueeComp;


