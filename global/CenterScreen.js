import React from 'react';

const CenterScreen = ({ className, children }) => (
	<div className={`flex items-center justify-center w-full ${className}`}>
		{ children }
	</div>
);

export default CenterScreen;