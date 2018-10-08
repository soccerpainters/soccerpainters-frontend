import React, { Component } from 'react';
import Header from './Header'

const Layout = (props) => (
	<div>
		<Header menu={props.menu} />
		{ props.children }
	</div>
)

export default Layout;
