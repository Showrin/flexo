import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ReactComponent as Overlay } from '../assets/childOverlay.svg';

const FlexChild = (props) => {
	const { id, onClick, isSelected } = props;

	return (
		<div
			className={classNames('flex-child', {
				'flex-child--selected': isSelected,
			})}
			onClick={() => onClick(id)}
		>
			<div className="flex-child__id">{id}</div>
			<Overlay className="flex-child__overlay" />
		</div>
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
