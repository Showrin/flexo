import React from 'react';
import classNames from 'classnames';
import Axis from './Axis';
import Consumer from '../../contextSetup';
import FlexChild from './FlexChild';
import Button from './Button';
import Toast from './Toast';
import { ReactComponent as ShareIcon } from '../assets/share.svg';

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
				const {
					openSidebar,
					handleSelectedElement,
					pushViewIntoDB,
				} = context;

				const onClickHandler = () => {
					handleSelectedElement('container', null);
					openSidebar();
				};

				const handleShareButtonClick = (e) => {
					e.stopPropagation();
					return pushViewIntoDB();
				};

				return (
					<div
						className={classNames('flex-container', {
							'flex-container--selected':
								selectedElement.type === 'container',
							'flex-container--with-padding': addPadding,
						})}
						style={{ ...containerStyles }}
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
						<Button
							className="flex-container__share-button"
							label={<ShareIcon />}
							onClick={handleShareButtonClick}
						/>
						<Toast />
					</div>
				);
			}}
		</Consumer>
	);
};

export default FlexContainer;
