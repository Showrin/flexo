import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toggle = (props) => {
	const { onClick, label, toggleColor, isActive } = props;
	const [toggleState, setToggleState] = useState({
		isActive,
	});

	useEffect(() => setToggleState({ isActive }), [isActive]);

	const onClickHandler = () => {
		return setToggleState(
			(preState) => ({ isActive: !preState.isActive }),
			onClick(toggleState)
		);
	};

	return (
		<div className="toggle">
			<div
				className={classNames(
					'toggle__rail',
					`toggle__rail--${toggleColor}`,
					{ 'toggle__rail--active': toggleState.isActive }
				)}
				onClick={onClickHandler}
			>
				<div className="toggle__rail-indicator" />
			</div>
			{label && <span className="toggle__label">{label}</span>}
		</div>
	);
};

Toggle.defaultProps = {
	label: null,
	onClick: () => {},
	toggleColor: 'black',
	isActive: true,
};

Toggle.propTypes = {
	label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
	onClick: PropTypes.func,
	toggleColor: PropTypes.oneOf(['black', 'danger', 'success']),
	isActive: PropTypes.bool,
};

export default Toggle;
