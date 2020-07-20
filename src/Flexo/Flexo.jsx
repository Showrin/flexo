import React, { Component } from 'react';
import { Navbar, FlexContainer, BottomBar, Sidebar } from './components';

class Flexo extends Component {
	state = {};
	render() {
		return (
			<>
				<Navbar />
				<FlexContainer />
				<BottomBar />
				<Sidebar />
			</>
		);
	}
}

export default Flexo;
