import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	${tw` absolute w-full pin-b `}
	border-top: 5px solid black;
	border-bottom: 5px solid black;
`

const Footer = ({ children }) => (
	<Box>
		{children}
	</Box>
)

export default Footer;
