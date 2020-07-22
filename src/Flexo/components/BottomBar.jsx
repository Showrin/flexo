import React from 'react';
import Consumer from '../../contextSetup';
import Toggle from './Toggle';

const BottomBar = () => {
	return (
		<Consumer>
			{(context) => {
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
							handleSelectedElement('', undefined);
							return closeSidebar();
						}}
					>
						<Toggle
							label="Main Axis"
							toggleColor="danger"
							onClick={handleMainAxisToggle}
						/>
						<Toggle
							label="Cross Axis"
							toggleColor="success"
							onClick={handleCrossAxisToggle}
						/>
						<Toggle
							label="Padding"
							toggleColor="black"
							onClick={handlePaddingToggle}
						/>
					</div>
				);
			}}
		</Consumer>
	);
};

export default BottomBar;
