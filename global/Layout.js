import React from 'react';
import styled from "styled-components";
import Navigation from './Navigation';
import PageEnd from './PageEnd';

const Box = styled.div`
	${tw` h-screen  `}
`

const Layout = ({ children, menu }) => (
	<Box>
		<PageEnd className="absolute pin-t w-full">
			<Navigation menu={menu} />
		</PageEnd>
		{children}
	</Box>
)

export default Layout;
