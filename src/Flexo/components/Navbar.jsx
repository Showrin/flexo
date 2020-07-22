import React from 'react';
import Consumer from '../../contextSetup';
import { ReactComponent as FlexoLogo } from '../assets/logo.svg';
import creatorAvatar from '../assets/showrinAvatar.png';

const Navbar = () => {
	return (
		<Consumer>
			{(context) => {
				const { closeSidebar } = context;

				return (
					<nav className="navbar" onClick={closeSidebar}>
						<div className="navbar__logo">
							<FlexoLogo />
						</div>
						<div className="navbar__creator">
							<div className="navbar__creator-info">
								<div className="navbar__creator-info-text">
									Created By
								</div>
								<div className="navbar__creator-info-name">
									Showrin Barua
								</div>
								<a
									className="navbar__creator-info-link"
									href="https://www.showrin.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit Creator's Site
								</a>
							</div>
							<div className="navbar__creator-avatar">
								<img
									src={creatorAvatar}
									alt="Avatar for Showrin"
								/>
							</div>
						</div>
					</nav>
				);
			}}
		</Consumer>
	);
};

export default Navbar;
