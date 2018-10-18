import React from 'react';

const CenterScreen = ({ className, children }) => (
	<div className={`h-full flex flex-grow items-center justify-center w-full ${className}`}>
		{ children }
	</div>
);

export default CenterScreen;