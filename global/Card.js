import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

const Card = styled.div`
	${tw` flex justify-center `}
`;

const CardComp = ({ feedItem }) => {
	return (
		<Card>
			<img src={feedItem.acf.image} alt={feedItem.acf.image.title}/>
		</Card>
	)
}

export default CardComp;
