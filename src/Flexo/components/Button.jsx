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

export default Button;
