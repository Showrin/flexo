import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const Sidebar = (props) => {
	return (
		<Consumer>
			{(context) => {
				const { selectedElement, showSidebar } = context.appState;
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
						<div className="sidebar__body"></div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default Sidebar;
