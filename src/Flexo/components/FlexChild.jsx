import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as Overlay } from '../assets/childOverlay.svg';

const FlexChild = (props) => {
	const { id, childStyles } = props;

	return (
		<Consumer>
			{(context) => {
				const { selectedElement } = context.appState;
				const { openSidebar, handleSelectedElement } = context;
				const onClickHandler = (e) => {
					e.stopPropagation();
					handleSelectedElement('child', id);
					openSidebar();
				};

				return (
					<div
						className={classNames('flex-child', {
							'flex-child--selected':
								selectedElement.type === 'child' &&
								selectedElement.id === id,
						})}
						onClick={onClickHandler}
						style={{ ...childStyles }}
					>
						<div className="flex-child__id">{id}</div>
						<Overlay className="flex-child__overlay" />
					</div>
				);
			}}
		</Consumer>
	);
};

FlexChild.defaultProps = {
	isSelected: false,
	onClick: () => {},
	childStyles: null,
};

FlexChild.propTypes = {
	isSelected: PropTypes.bool,
	onClick: PropTypes.func,
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	childStyles: PropTypes.shape({}),
};

export default FlexChild;
