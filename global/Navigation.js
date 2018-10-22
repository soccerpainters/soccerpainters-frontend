import React from 'react';
import styled from "styled-components";
import Link from 'next/link';
import MobileNavigation from './MobileNavigation';

const MenuItem = styled.span`
	a{
		${tw` text-black no-underline relative inline-block uppercase `}

		&:hover {
			color: ${ p => p.theme.colors.secondary};
		}
	}
`;

const Navigation = (props) => {
	return (
		<div>
			<MobileNavigation className="block md:hidden" />
			<nav className="p-4 hidden justify-between md:flex">
				<MenuItem>
					<Link href="/about"><a>About</a></Link>
				</MenuItem>
				<MenuItem>
					<Link href="/"><a>Soccer Painters</a></Link>
				</MenuItem>
				<MenuItem>
					<Link href="/shop"><a>Shop</a></Link>
				</MenuItem>
			</nav>
		</div>
	)
}

export default Navigation;

