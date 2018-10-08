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
		<nav>
			{props.menu.map(link => {
				return <MenuItem key={link.ID} link={link} />
			})}
		</nav>
	)
}

export default Navigation;
