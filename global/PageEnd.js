import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	${tw` bg-white `}
`

const PageEnd = ({ children, className }) => (
	<Box className={className}>
		{children}
	</Box>
)

export default PageEnd;
