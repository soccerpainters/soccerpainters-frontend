import React from 'react';
import styled from "styled-components";
import Link from 'next/link';

const MenuItem = styled.span`
	a{
		${tw` text-black no-underline `}
	}
`;

const Navigation = (props) => {
	return (
		<nav className="p-4 flex justify-between">
			<MenuItem>
				<Link href="/"><a>Home</a></Link>
			</MenuItem>
			<MenuItem>
				<Link href="/about"><a>About</a></Link>
			</MenuItem>
			<MenuItem>
				<Link href="/shop"><a>Shop</a></Link>
			</MenuItem>
			{
				// props.menu.map(link => {
				// 	return <MenuItem key={link.ID} link={link} />
				// })
			}
		</nav>
	)
}

export default Navigation;

