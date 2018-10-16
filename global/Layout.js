import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import PageEnd from './PageEnd';
import Marquee from './Marquee';

const Layout = ({ children, menu, hideBanner, bannerText }) => (
	<div className="flex flex-col min-h-screen">
		<header>
			<PageEnd className="w-full fixed pin-t z-10 border-black border-solid border-b-4">
				<MobileNavigation />
				{ /** <Navigation menu={menu} /> */}
			</PageEnd>
		</header>
		<div id="modal-root"></div>
		<div className="flex-1 container mx-auto pb-12 mt-16">
			{children}
		</div>
		<footer>
			{!hideBanner &&
				<PageEnd className="w-full fixed pin-b z-10 border-black border-solid border-t-4">
					<Marquee text={bannerText.title.rendered} />
				</PageEnd>}
		</footer>
	</div>
)

export default Layout;
