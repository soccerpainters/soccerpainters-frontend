import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

const Card = styled.div`
	${tw`
		mx-2 p-4 bg-grey-lighter rounded-sm shadow
	`}
`

const Box = styled.div`
	${tw`
		bg-black
	`}
`

const CardComp = ({ feedItem }) => {
	return (
		<Card>
			<Link
				as={`/${feedItem.type}/${feedItem.slug}`}
				prefetch href={`/${feedItem.type}?slug=${feedItem.slug}&apiRoute=${feedItem.type}`}
			>
				<a>
					{feedItem.title.rendered}
				</a>
			</Link>
			<Box>
				IMG
			</Box>
		</Card>
	)
}

export default CardComp;
