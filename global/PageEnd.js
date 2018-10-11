import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	${tw` bg-white `}
	border-top: 5px solid black;
	border-bottom: 5px solid black;
`

const PageEnd = ({ children, className }) => (
	<Box className={className}>
		{children}
	</Box>
)

export default PageEnd;
