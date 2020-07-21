import React from 'react';
import classNames from 'classnames';
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
					selectedElement,
					containerStyles,
				} = context.appState;
				const { openSidebar, handleSelectedElement } = context;
				const padding = addPadding ? '50px 88px' : '0';

				const onClickHandler = () => {
					handleSelectedElement('container', undefined);
					openSidebar();
				};

				return (
					<div
						className={classNames('flex-container', {
							'flex-container--selected':
								selectedElement.type === 'container',
						})}
						style={{ padding, ...containerStyles }}
						onClick={onClickHandler}
					>
						{showMainAxis && (
							<Axis direction="horizontal" type="main" />
						)}
						{showCrossAxis && (
							<Axis direction="vertical" type="cross" />
						)}
						<FlexChild id={1} />
						<FlexChild id={2} />
						<FlexChild id={3} />
						<FlexChild id={4} />
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
