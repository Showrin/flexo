import React from 'react';
import Consumer from '../../contextSetup';
import Toggle from './Toggle';

const BottomBar = () => {
	return (
		<Consumer>
			{(context) => {
				const {
					showMainAxis,
					showCrossAxis,
					addPadding,
				} = context.appState;
				const {
					handleMainAxisToggle,
					handleCrossAxisToggle,
					handlePaddingToggle,
					closeSidebar,
					handleSelectedElement,
				} = context;

				return (
					<div
						className="bottom-bar"
						onClick={() => {
							handleSelectedElement('', null);
							return closeSidebar();
						}}
					>
						<Toggle
							label="Main Axis"
							toggleColor="danger"
							onClick={handleMainAxisToggle}
							isActive={showMainAxis}
						/>
						<Toggle
							label="Cross Axis"
							toggleColor="success"
							onClick={handleCrossAxisToggle}
							isActive={showCrossAxis}
						/>
						<Toggle
							label="Padding"
							toggleColor="black"
							onClick={handlePaddingToggle}
							isActive={addPadding}
						/>
					</div>
				);
			}}
		</Consumer>
	);
};

export default BottomBar;
