import React from 'react';
import Axis from './Axis';
import Consumer from '../../contextSetup';
import FlexChild from './FlexChild';

const FlexContainer = (props) => {
	return (
		<Consumer>
			{(context) => {
				const {
					showMainAxis,
					showCrossAxis,
					addPadding,
				} = context.appState;
				const padding = addPadding ? '50px 88px' : '0';

				return (
					<div className="flex-container" style={{ padding }}>
						{showMainAxis && (
							<Axis direction="horizontal" type="main" />
						)}
						{showCrossAxis && (
							<Axis direction="vertical" type="cross" />
						)}
						<FlexChild id={1} />
						<FlexChild id={2} />
						<FlexChild id={3} />
						<FlexChild id={4} isSelected={true} />
						<FlexChild id={5} />
						<FlexChild id={6} />
						<FlexChild id={7} />
						<FlexChild id={8} />
						<FlexChild id={9} />
						<FlexChild id={10} />
						<FlexChild id={11} />
						<FlexChild id={12} />
						<FlexChild id={13} />
					</div>
				);
			}}
		</Consumer>
	);
};

export default FlexContainer;
