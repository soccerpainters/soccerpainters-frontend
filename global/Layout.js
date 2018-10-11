import React from 'react';
import styled from "styled-components";
import Navigation from './Navigation';
import PageEnd from './PageEnd';
import Marquee from './Marquee'

const Layout = ({ children, menu, hideBanner, bannerText }) => (
	<div className="flex flex-col min-h-screen">
		<header>
			<PageEnd className="w-full">
				<Navigation menu={menu} />
			</PageEnd>
		</header>
		<div className="flex-1 container mx-auto">
			{children}
		</div>
		<footer>
			{ !hideBanner &&
				<PageEnd className="w-full fixed pin-b z-10">
					<Marquee text={bannerText.title.rendered} />
				</PageEnd>}
		</footer>
	</div>
)

export default Layout;
