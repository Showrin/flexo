import React from 'react';
import Axis from './Axis';

const FlexContainer = (props) => {
	return (
		<div className="flex-container">
			<Axis direction="horizontal" type="main" />
			<Axis direction="vertical" type="cross" />
		</div>
	);
};

export default FlexContainer;
