import React from 'react';
import classNames from 'classnames';
import Axis from './Axis';
import Consumer from '../../contextSetup';
import FlexChild from './FlexChild';

const FlexContainer = () => {
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
						{showMainAxis &&
							(containerStyles.flexDirection === 'row' ||
							containerStyles.flexDirection === 'row-reverse' ? (
								<Axis direction="horizontal" type="main" />
							) : (
								<Axis direction="vertical" type="main" />
							))}
						{showCrossAxis &&
							(containerStyles.flexDirection === 'row' ||
							containerStyles.flexDirection === 'row-reverse' ? (
								<Axis direction="vertical" type="cross" />
							) : (
								<Axis direction="horizontal" type="cross" />
							))}
						{children.map((child) => {
							const { id, childStyles } = child;
							return (
								<FlexChild
									key={id}
									id={id}
									childStyles={childStyles}
								/>
							);
						})}
					</div>
				);
			}}
		</Consumer>
	);
};

export default FlexContainer;
