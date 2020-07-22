import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as BottomRotate } from '../assets/bottomRotate.svg';
import { ReactComponent as RightRotate } from '../assets/rightRotate.svg';
import styledOptions from './styleOptions';
import Button from './Button';

const Sidebar = () => {
	const convertPropertyNameFromJsxToCss = (propertyName) => {
		return propertyName
			.split('')
			.map((character) =>
				character >= 'A' && character <= 'Z'
					? `-${character.toLowerCase()}`
					: character
			)
			.join('');
	};

	return (
		<Consumer>
			{(context) => {
				const {
					selectedElement,
					showSidebar,
					sidebarPosition,
					containerStyles,
					children,
				} = context.appState;
				const {
					closeSidebar,
					handleCssPropertyChange,
					changeSidebarPosition,
				} = context;

				return (
					<div
						className={classNames(
							'sidebar',
							`sidebar--${sidebarPosition}`,
							{
								'sidebar--open': showSidebar,
							}
						)}
					>
						<div className="sidebar__header">
							<div className="sidebar__header-title">
								{`Flex ${selectedElement.type}${
									selectedElement.id
										? `-{${selectedElement.id}}`
										: ''
								}`}
							</div>
							{sidebarPosition === 'right' ? (
								<BottomRotate
									className="sidebar__header-icon sidebar__header-icon--rotate"
									onClick={() => {
										changeSidebarPosition('bottom');
									}}
								/>
							) : (
								<RightRotate
									className="sidebar__header-icon sidebar__header-icon--rotate"
									onClick={() => {
										changeSidebarPosition('right');
									}}
								/>
							)}
							<CloseIcon
								className="sidebar__header-icon sidebar__header-icon--close"
								onClick={closeSidebar}
							/>
						</div>
						<div className="sidebar__body">
							{selectedElement.type === 'container' &&
								Object.keys(containerStyles).map((style) => (
									<div
										key={style}
										className="sidebar__body-col"
									>
										<code className="sidebar__body-col-property">{`${convertPropertyNameFromJsxToCss(
											style
										)} >  ${containerStyles[style]}`}</code>
										<div className="sidebar__body-col-options">
											{styledOptions[style] &&
												styledOptions[
													style
												].map((option) => (
													<Button
														key={option}
														label={option}
														active={
															option ===
															containerStyles[
																style
															]
														}
														isIncrement={
															option
																.split('')
																.shift() === '+'
														}
														isDecrement={
															option
																.split('')
																.shift() === '-'
														}
														onClick={() =>
															handleCssPropertyChange(
																selectedElement.id,
																style,
																option
															)
														}
													/>
												))}
										</div>
									</div>
								))}
							{selectedElement.type === 'child' &&
								Object.keys(
									children[selectedElement.id - 1].childStyles
								).map((style) => (
									<div
										key={style}
										className="sidebar__body-col"
									>
										<code className="sidebar__body-col-property">{`${convertPropertyNameFromJsxToCss(
											style
										)} >  ${
											children[selectedElement.id - 1]
												.childStyles[style]
										}`}</code>
										<div className="sidebar__body-col-options">
											{styledOptions[style] &&
												styledOptions[
													style
												].map((option) => (
													<Button
														key={option}
														label={option}
														active={
															option ===
															children[
																selectedElement.id -
																	1
															].childStyles[style]
														}
														isIncrement={
															option
																.split('')
																.shift() === '+'
														}
														isDecrement={
															option
																.split('')
																.shift() === '-'
														}
														onClick={() =>
															handleCssPropertyChange(
																selectedElement.id,
																style,
																option
															)
														}
													/>
												))}
										</div>
									</div>
								))}
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default Sidebar;
