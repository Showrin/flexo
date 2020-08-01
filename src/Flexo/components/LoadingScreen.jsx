import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as LoadingArt } from '../assets/loading_art.svg';

const LoadingScreen = () => {
	return (
		<Consumer>
			{(context) => {
				const {
					isLoading,
					removeLoadingScreenFromDOM,
				} = context.loadingState;

				return (
					<div
						className={classNames('loading-screen', {
							'loading-screen--hidden': !isLoading,
							'loading-screen--removed': removeLoadingScreenFromDOM,
						})}
					>
						<div className="loading-screen__art-wrapper">
							<LoadingArt className="loading-screen__art" />
							<div className="loading-screen__spin" />
							<div className="loading-screen__text">
								Loading the View
							</div>
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default LoadingScreen;
