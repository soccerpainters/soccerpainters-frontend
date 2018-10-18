import React from 'react'
import Link from 'next/link';
import styled from 'styled-components';
import Image from "./Image";

const Card = styled.div`
	${tw` justify-center text-center `}

	transition: all .2s ease-in-out;

	&:hover {
		transform: scale(1.02);
	}
`;

const CardComp = ({ feedItem }) => {
	return (
		<Card>
			<Link
				as={`/${feedItem.type}/${feedItem.slug}`}
				href={`/${feedItem.type}?slug=${feedItem.slug}&apiRoute=${feedItem.type}`}
			>
				<a className="text-black">
					<Image className="w-full" src={feedItem.acf.image} alt={feedItem.acf.image.title} />
					<br />
					<span className="inline-block mt-3 text-xs lg:hidden">{feedItem.title.rendered}</span>
				</a>
			</Link>
		</Card>
	)
}

export default CardComp;
