import React from 'react';
import styled from "styled-components";
import Link from 'next/link';

const MenuItem = styled.span`
	a{
		${tw` text-black no-underline relative inline-block `}

		&:hover {
			&::before {
				content: '';
				width: 100%;
				position: absolute;
				right: 0;
				top: 50%;
				border-bottom: 2px solid ${ p => p.theme.colors.primary }; // blue
				transform: skewY(-5deg);
			}
			text-decoration: line-through wavy ${ p => p.theme.colors.secondary }; //Pink
		}
	}
`;

const Navigation = (props) => {
	return (
		<nav className="p-4 flex justify-between">
			<MenuItem>
				<Link href="/about"><a>About</a></Link>
			</MenuItem>
			<MenuItem>
				<Link href="/"><a>Soccer Painters</a></Link>
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

