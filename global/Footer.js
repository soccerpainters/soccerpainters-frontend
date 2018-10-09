import React from 'react';
import styled from 'styled-components'
import { Box as Base } from 'rebass';

const Box = styled(Base)`
	border-top: 5px solid black;
	border-bottom: 5px solid black;
`

const Footer = (props) => (
	<Box>
		{props.children}
	</Box>
)

export default Footer;
