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
					children,
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
						{children.map((child) => {
							const { id, childStyles } = child;
							return (
								<FlexChild id={id} childStyles={childStyles} />
							);
						})}
					</div>
				);
			}}
		</Consumer>
	);
};

export default FlexContainer;
