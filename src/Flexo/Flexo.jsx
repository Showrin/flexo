import React, { Component } from 'react';
import { Navbar, FlexContainer, BottomBar } from './components';

class Flexo extends Component {
	state = {};
	render() {
		return (
			<>
				<Navbar />
				<FlexContainer />
				<BottomBar />
			</>
		);
	}
}

export default Flexo;
