import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Consumer from '../../contextSetup';
import { ReactComponent as Overlay } from '../assets/childOverlay.svg';

const FlexChild = (props) => {
	const { id, onClick, isSelected } = props;

	return (
		<Consumer>
			{(context) => {
				const { openSidebar } = context;

				return (
					<div
						className={classNames('flex-child', {
							'flex-child--selected': isSelected,
						})}
						onClick={(e) => {
							e.stopPropagation();
							openSidebar();
							return onClick(id);
						}}
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
};

FlexChild.propTypes = {
	isSelected: PropTypes.bool,
	onClick: PropTypes.func,
	id: PropTypes.oneOfType(PropTypes.string, PropTypes.number),
};

export default FlexChild;
