import React from 'react';

const CenterScreen = ({ className, children }) => (
	<div className={`h-full flex items-center justify-center ${className}`}>
		{ children }
	</div>
);

export default CenterScreen;