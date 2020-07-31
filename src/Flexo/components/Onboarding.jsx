import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ReactComponent as LeftArrow } from '../assets/arrow_left.svg';
import { ReactComponent as RightArrow } from '../assets/arrow_right.svg';
import Button from './Button';

const Onboarding = (props) => {
	const { pages, showOnboarding } = props;
	const [onboardingState, setOnboardingState] = useState({
		activePageIndex: 0,
		showOnboarding: showOnboarding || false,
		removeOnboardingContainerFromDOM: false,
	});

	const slideToNext = () => {
		return setOnboardingState((preState) => {
			if (preState.activePageIndex === pages.length - 1) {
				return { ...preState, showOnboarding: false };
			}

			return {
				...preState,
				activePageIndex: preState.activePageIndex + 1,
			};
		});
	};

	const slideToPrev = () => {
		return setOnboardingState((preState) => ({
			...preState,
			activePageIndex: preState.activePageIndex - 1,
		}));
	};

	const skipOnboard = () => {
		return setOnboardingState((preState) => ({
			...preState,
			showOnboarding: false,
		}));
	};

	useEffect(() => {
		if (!onboardingState.showOnboarding) {
			setTimeout(() => {
				setOnboardingState((preState) => ({
					...preState,
					removeOnboardingContainerFromDOM: true,
				}));
			}, 300);
		}
	}, [onboardingState.showOnboarding]);

	return (
		<div
			className={classNames('onboarding', {
				'onboarding--active': onboardingState.showOnboarding,
				'onboarding--removed':
					onboardingState.removeOnboardingContainerFromDOM,
			})}
		>
			<div className="onboarding__topbar">
				<div
					className={classNames('onboarding__topbar-back-icon', {
						'onboarding__topbar-back-icon--shown':
							onboardingState.activePageIndex !== 0,
					})}
					onClick={slideToPrev}
				>
					<LeftArrow />
				</div>

				<div
					className={classNames('onboarding__topbar-skip', {
						'onboarding__topbar-skip--shown':
							onboardingState.activePageIndex !==
							pages.length - 1,
					})}
					onClick={skipOnboard}
				>
					Skip
				</div>
			</div>
			{pages.map((page, index) => (
				<div
					key={index}
					className={classNames('onboarding__page', {
						'onboarding__page--active':
							index === onboardingState.activePageIndex,
						'onboarding__page--left':
							index < onboardingState.activePageIndex,
						'onboarding__page--right':
							index > onboardingState.activePageIndex,
					})}
				>
					<div className="onboarding__page-illustration">
						{page.illustration}
					</div>
					<div className="onboarding__page-text">
						<div className="onboarding__page-text-title">
							{page.title}
						</div>
						<div className="onboarding__page-text-description">
							{page.description}
						</div>
					</div>
				</div>
			))}
			<div className="onboarding__bottombar">
				<div className="onboarding__bottombar-page-indicator">
					{pages.map((page, index) => (
						<div
							key={index}
							className={classNames(
								'onboarding__bottombar-page-indicator-bar',
								{
									'onboarding__bottombar-page-indicator-bar--active':
										index ===
										onboardingState.activePageIndex,
								}
							)}
						></div>
					))}
				</div>
				<Button
					className="onboarding__bottombar-next-button"
					label={<RightArrow />}
					onClick={slideToNext}
				/>
			</div>
		</div>
	);
};

Onboarding.defaultProps = {
	showOnboarding: true,
};

Onboarding.propTypes = {
	pages: PropTypes.array.isRequired,
	showOnboarding: PropTypes.bool,
};

export default Onboarding;
