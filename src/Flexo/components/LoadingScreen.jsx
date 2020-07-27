import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as LoadingArt } from '../assets/loading_art.svg';

const LoadingScreen = () => {
	return (
		<Consumer>
			{(context) => {
				const isLoading = context.isLoading;

				return (
					<div
						className={classNames('loading-screen', {
							'loading-screen--hidden': !isLoading,
						})}
					>
						<div className="loading-screen__art-wrapper">
							<LoadingArt className="loading-screen__art" />
							<div className="loading-screen__spin" />
							<div className="loading-screen__text">
								Loading the View. Please Wait
							</div>
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default LoadingScreen;
