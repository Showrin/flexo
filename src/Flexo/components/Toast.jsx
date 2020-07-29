import React, { useRef } from 'react';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as CloseIcon } from '../assets/close.svg';
import { ReactComponent as CheckIcon } from '../assets/check.svg';
import { ReactComponent as CopyIcon } from '../assets/copy.svg';

const Toast = (props) => {
	const sharingLinkRef = useRef();
	const copyIconRef = useRef();
	const checkIconRef = useRef();

	return (
		<Consumer>
			{(context) => {
				const { toastState, setToastState } = context;
				const closeToast = () => setToastState({ isShown: false });

				const animateCheckAndCopyIcon = () => {
					copyIconRef.current.style.display = 'none';
					checkIconRef.current.style.display = 'block';

					setTimeout(() => {
						copyIconRef.current.style.display = 'block';
						checkIconRef.current.style.display = 'none';
					}, 3000);
				};

				const copySharingLink = () => {
					if (document.body.createTextRange) {
						// This block for IE support
						const range = document.body.createTextRange();

						range.moveToElementText(sharingLinkRef.current);
						range.select();
						document.execCommand('Copy');
					} else if (window.getSelection) {
						const selection = window.getSelection();
						const range = document.createRange();

						range.selectNodeContents(sharingLinkRef.current);
						selection.removeAllRanges();
						selection.addRange(range);
						document.execCommand('Copy');
					}

					animateCheckAndCopyIcon();
				};

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
						<div
							className="toast__content"
							onClick={copySharingLink}
						>
							<div
								className="toast__content-link"
								title="Copy the link"
								ref={sharingLinkRef}
							>
								{toastState.shareID}
							</div>
							<CopyIcon
								className="toast__content-copy"
								ref={copyIconRef}
							/>
							<CheckIcon
								className="toast__content-check"
								ref={checkIconRef}
							/>
						</div>
					</div>
				);
			}}
		</Consumer>
	);
};

export default Toast;
