import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as CloseIcon } from '../assets/close.svg';

const Sidebar = (props) => {
	return (
		<Consumer>
			{(context) => {
				const { appState, closeSidebar } = context;

				return (
					<div
						className={classNames('sidebar', {
							'sidebar--open': appState.showSidebar,
						})}
					>
						<div className="sidebar__header">
							<div className="sidebar__header-title">
								Flex Container Settings
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
