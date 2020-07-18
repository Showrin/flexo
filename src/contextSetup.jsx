import React, { createContext, useState } from 'react';
const { Consumer, Provider } = createContext();

const ContextProvider = (props) => {
	const [appState, setAppState] = useState({});

	return <Provider value={appState}>{props.children}</Provider>;
};

export { ContextProvider };
export default Consumer;
