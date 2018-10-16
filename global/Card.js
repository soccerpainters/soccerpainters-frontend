import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'

const Card = styled.div`
	${tw` justify-center text-center `}
`;

const CardComp = ({ feedItem }) => {
	return (
		<Card>
			<img src={feedItem.acf.image} alt={feedItem.acf.image.title}/>
			<br/>
			<span className="inline-block mt-3 text-xs">{ feedItem.title.rendered }</span>
		</Card>
	)
}

export default CardComp;
