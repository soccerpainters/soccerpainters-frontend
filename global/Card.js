import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import Image from "./Image";
import { media } from '../theme';

const Card = styled.div`
	${tw` justify-center text-center px-4 `}

	transition: all .2s ease-in-out;


	&:hover {
		transform: scale(1.02);

		${ media.lg`		
			img {
				filter: blur(2px);
			}
		`}
	}
`;

const Title= styled.span`
	${tw` mt-3 text-xs uppercase text-black `}

	${ media.lg`
		${tw` text-lg text-white `}
	`}
`;

const Overlay = styled.div`
	${tw` hidden absolute w-full h-full pin-t pin-l flex-grow items-center justify-center px-2 `}

	transition: all .2s ease-in-out;
	opacity: 0;
	background-color: rgba(0, 0, 0, 0.5);

	&:hover {
		${tw` `}
		opacity: 1;
	}

	${ media.lg`
		${tw` flex `}
	`}
`;

const CardComp = ({ feedItem }) => {
	return (
		<Card>
			<Link
				as={`/${feedItem.type}/${feedItem.slug}`}
				href={`/${feedItem.type}?slug=${feedItem.slug}&apiRoute=${feedItem.type}`}
			>
				<a className="text-black inline-block relative no-underline">
					<Image className="w-full" src={feedItem.acf.image} alt={feedItem.acf.image.title} />
					<Title className="lg:hidden">{feedItem.title.rendered}</Title>
					<Overlay>
						<Title>{feedItem.title.rendered}</Title>
					</Overlay>
				</a>
			</Link>
		</Card>
	)
}

export default CardComp;
