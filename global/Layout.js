import React, { Component } from 'react';
import styled from "styled-components";
import Navigation from './Navigation';

const Box = styled.div`
	${tw``}
`

const Layout = (props) => (
	<Box>
		<Navigation menu={props.menu} />
		{ props.children }
	</Box>
)

export default Layout;
