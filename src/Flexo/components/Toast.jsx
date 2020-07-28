import React from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CopyIcon } from '../assets/copy.svg';

const Toast = (props, toastRef) => {
	return (
		<Consumer>
			{(context) => {
				const { toastState, setToastState } = context;
				const closeToast = () => setToastState({ isShown: false });

				return (
					<div
						className={classNames('toast', {
							'toast--active': toastState.isShown,
						})}
						onClick={(e) => e.stopPropagation()}
					>
						<div className="toast__header">
							<span className="toast__header-text">
								Share this view with others
							</span>
							<CloseIcon
								className="toast__header-close"
								onClick={closeToast}
							/>
						</div>
						<div className="toast__content">
							<div
								className="toast__content-link"
								title="Copy the link"
							>
								{toastState.shareID}
							</div>
							<CopyIcon className="toast__content-copy" />
							<CheckIcon className="toast__content-check" />
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default Toast;
