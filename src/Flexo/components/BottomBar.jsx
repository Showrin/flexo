import React from 'react';
import Toggle from './Toggle';

const BottomBar = () => {
	return (
		<div className="bottom-bar">
			<Toggle label="Main Axis" toggleColor="danger" />
			<Toggle label="Cross Axis" toggleColor="success" />
			<Toggle label="Padding" toggleColor="black" />
		</div>
	);
};

export default BottomBar;
