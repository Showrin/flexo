import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import styledOptions from './styleOptions';

const Sidebar = () => {
	return (
		<Consumer>
			{(context) => {
				const {
					selectedElement,
					showSidebar,
					containerStyles,
					children,
				} = context.appState;
				const { closeSidebar } = context;

				return (
					<div
						className={classNames('sidebar', {
							'sidebar--open': showSidebar,
						})}
					>
						<div className="sidebar__header">
							<div className="sidebar__header-title">
								{`Flex ${selectedElement.type}${
									selectedElement.id
										? `-{${selectedElement.id}}`
										: ''
								} Settings`}
							</div>
							<CloseIcon
								className="sidebar__header-close"
								onClick={closeSidebar}
							/>
						</div>
						<div className="sidebar__body">
							{selectedElement.type === 'container' &&
								Object.keys(containerStyles).map((style) => (
									<div className="sidebar__body-col">
										<code className="sidebar__body-col-property">{`${style} >  ${containerStyles[style]}`}</code>
										<div className="sidebar__body-col-options">
											{styledOptions[style] &&
												styledOptions[style].map(
													(option) => option
												)}
										</div>
									</div>
								))}
							{selectedElement.type === 'child' &&
								Object.keys(
									children[selectedElement.id - 1].childStyles
								).map((style) => (
									<div className="sidebar__body-col">
										<code className="sidebar__body-col-property">{`${style} >  ${
											children[selectedElement.id - 1]
												.childStyles[style]
										}`}</code>
										<div className="sidebar__body-col-options">
											{styledOptions[style] &&
												styledOptions[style].map(
													(option) => option
												)}
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
