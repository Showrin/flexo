import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Axis = (props) => {
	const { direction, type } = props;

	return (
		<div
			className={classNames(
				'axis',
				`axis--${direction}`,
				`axis--${type}`
			)}
		/>
	);
};

Axis.propTypes = {
	direction: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
	type: PropTypes.oneOf(['main', 'cross']).isRequired,
};

export default Axis;
