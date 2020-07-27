import React from 'react';
import {
	Navbar,
	FlexContainer,
	BottomBar,
	Sidebar,
	LoadingScreen,
} from './components';

const Flexo = () => (
	<>
		<LoadingScreen />
		<Navbar />
		<FlexContainer />
		<BottomBar />
		<Sidebar />
	</>
);

export default Flexo;
