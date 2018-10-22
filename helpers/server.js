import MobileDetect from 'mobile-detect';


const server = (context) => {
	let md;
	const isServer = (context.req) ? true : false;

	if (isServer) { 
		md = new MobileDetect(context.req.headers['user-agent']);
	} else {
		md = new MobileDetect(window.navigator.userAgent);
	}

	const isMobile = md.phone() !== null;
	const isTablet = md.tablet() !== null;
	const isDesktop = (isMobile || isTablet) ? false : true;
	return {
		isServer,
		device: {
			isMobile,
			isTablet,
			isDesktop
		}
	}
}

export default server;