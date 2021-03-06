import React from 'react';
import Navigation from './Navigation';
import MobileNavigation from './MobileNavigation';
import PageEnd from './PageEnd';
import Marquee from './Marquee';
import MediaQuery from 'react-responsive';
import theme from '../tailwind';

const Layout = (props) => {

	const { Footer, children, menu } = props;

	return (
		<div className="flex flex-col min-h-screen">
			<header>
				<PageEnd className="w-full fixed pin-t z-10 border-black border-solid border-b-4">
					<Navigation menu={menu} />
				</PageEnd>
			</header>
			<div id="modal-root"></div>
			<div className="flex flex-grow container mx-auto pb-12 mt-16">
				{children}
			</div>

			{Footer && <footer>
				<PageEnd className="w-full fixed pin-b z-10 border-black border-solid border-t-4 uppercase">
					<Footer {...props} />
				</PageEnd>
			</footer>}
		</div>
	)
}

export default Layout;
