import React from 'react'
import Link from 'next/link';
import { getSlug } from '../helpers/slug';


const Card = ({ feedItem }) => {
	return (
		<div>
			<Link
				as={`/${feedItem.type}/${feedItem.slug}`}
				href={`/${feedItem.type}?slug=${feedItem.slug}&apiRoute=${feedItem.type}`}
			>
				<a>
					{feedItem.title.rendered}
				</a>
			</Link>
		</div>
	)
}

export default Card;
