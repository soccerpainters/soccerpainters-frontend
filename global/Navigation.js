import React from 'react'
import Link from 'next/link';

const MenuItem = ({ link }) => {
	return (
		<Link
			href={link.url}
		>
			<a>{link.title}</a>
		</Link>
	)
}

const Navigation = (props) => {
	return (
		<nav className="p-4 flex justify-between">
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
			<Link href="/shop"><a>Shop</a></Link>
			{
				// props.menu.map(link => {
				// 	return <MenuItem key={link.ID} link={link} />
				// })
			}
		</nav>
	)
}

export default Navigation;

