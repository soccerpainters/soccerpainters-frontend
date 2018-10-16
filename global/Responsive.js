import React from 'react';
import MediaQuery from 'react-responsive';
import theme from '../tailwind';


const Responsive = props => {
	const { children } = props;
	return (
		<>
			<MediaQuery maxWidth={theme.views.sm}>
				{React.cloneElement(children, { screen: 0 })}
			</MediaQuery>
			<MediaQuery minWidth={theme.views.sm} maxWidth={theme.views.md}>
				{React.cloneElement(children, { screen: theme.views.sm })}
			</MediaQuery>
			<MediaQuery minWidth={theme.views.md} maxWidth={theme.views.lg}>
				{React.cloneElement(children, { screen: theme.views.md })}
			</MediaQuery>
			<MediaQuery minWidth={theme.views.lg} maxWidth={theme.views.xl}>
				{React.cloneElement(children, { screen: theme.views.lg })}
			</MediaQuery>
			<MediaQuery minWidth={theme.views.xl}>
				{React.cloneElement(children, { screen: theme.views.xl })}
			</MediaQuery>
		</>
	);
}

export default Responsive;