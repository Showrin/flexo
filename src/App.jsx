import React from 'react';
import { ContextProvider } from './contextSetup';
import Flexo from './Flexo';

function App() {
	return (
		<div className="App">
			<ContextProvider>
				<Flexo />
			</ContextProvider>
		</div>
	);
}

export default App;
