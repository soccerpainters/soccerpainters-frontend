import React, { Component } from 'react';
import Navigation from './Navigation';

const Layout = (props) => (
	<div>
		<Navigation menu={props.menu} />
		{ props.children }
	</div>
)

export default Layout;
