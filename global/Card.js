import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

import { Text, Card as Base, Box } from 'rebass';

const Card = styled(Base)`

`

const CardComp = ({ feedItem }) => {
	return (
		<Card
			fontSize={2}
			fontWeight='bold'
			width={[1]}
			p={2}
			m={2}
			bg='#f6f6ff'
			borderRadius={8}
			boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'
		>
			<Text>
				<Link
					as={`/${feedItem.type}/${feedItem.slug}`}
					prefetch href={`/${feedItem.type}?slug=${feedItem.slug}&apiRoute=${feedItem.type}`}
				>
					<a>
						{feedItem.title.rendered}
					</a>
				</Link>
			</Text>
			<Box bg="black" m={2}>
				IMG
			</Box>
		</Card>
	)
}

export default CardComp;
