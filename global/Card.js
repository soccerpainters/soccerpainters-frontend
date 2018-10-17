import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

const Card = styled.div`
	${tw` justify-center text-center `}
`;

const Image = styled.img`
	${tw` w-full `}
`

const CardComp = ({ feedItem }) => {
	return (
		<Card>
			<Link
				as={`/${feedItem.type}/${feedItem.slug}`}
				href={`/${feedItem.type}?slug=${feedItem.slug}&apiRoute=${feedItem.type}`}
			>
				<a className="text-black">
					<Image src={feedItem.acf.image} alt={feedItem.acf.image.title} />
					<br />
					<span className="inline-block mt-3 text-xs lg:hidden">{feedItem.title.rendered}</span>
				</a>
			</Link>
		</Card>
	)
}

export default CardComp;
