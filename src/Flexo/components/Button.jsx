import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
	const { label, active, isIncrement, isDecrement, onClick } = props;

	return (
		<button
			className={classNames('button', {
				'button--active': active,
				'button--increment': isIncrement,
				'button--decrement': isDecrement,
			})}
			onClick={onClick}
		>
			<span className="button__label">{label}</span>
		</button>
	);
};

Button.defaultProps = {
	label: null,
	active: false,
	isIncrement: false,
	isDecrement: false,
	onClick: () => {},
};

Button.propTypes = {
	label: PropTypes.node,
	active: PropTypes.bool,
	isIncrement: PropTypes.bool,
	isDecrement: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
