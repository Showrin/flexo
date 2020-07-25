import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = (props) => {
	const {
		label,
		active,
		isIncrement,
		isDecrement,
		onClick,
		className,
	} = props;

	return (
		<button
			className={classNames('button', className, {
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
	className: null,
	label: null,
	active: false,
	isIncrement: false,
	isDecrement: false,
	onClick: () => {},
};

Button.propTypes = {
	className: PropTypes.string,
	label: PropTypes.node,
	active: PropTypes.bool,
	isIncrement: PropTypes.bool,
	isDecrement: PropTypes.bool,
	onClick: PropTypes.func,
};

export default Button;
