import React, { createContext, useState } from 'react';
const { Consumer, Provider } = createContext();

const ContextProvider = (props) => {
	const [appState, setAppState] = useState({
		showMainAxis: true,
		showCrossAxis: true,
		addPadding: true,
		showSidebar: false,
		selectedElement: {
			type: '',
			id: undefined,
		},
	});

	const handleMainAxisToggle = () =>
		setAppState((preState) => ({
			...preState,
			showMainAxis: !preState.showMainAxis,
		}));

	const handleCrossAxisToggle = () =>
		setAppState((preState) => ({
			...preState,
			showCrossAxis: !preState.showCrossAxis,
		}));

	const handlePaddingToggle = () =>
		setAppState((preState) => ({
			...preState,
			addPadding: !preState.addPadding,
		}));

	const openSidebar = () =>
		setAppState((preState) => ({
			...preState,
			showSidebar: true,
		}));

	const closeSidebar = () =>
		setAppState(
			(preState) => ({
				...preState,
				showSidebar: false,
			}),
			handleSelectedElement('', undefined)
		);

	const handleSelectedElement = (elementType, id) =>
		setAppState((preState) => ({
			...preState,
			selectedElement: { type: elementType, id },
		}));

	return (
		<Provider
			value={{
				appState,
				handleMainAxisToggle,
				handleCrossAxisToggle,
				handlePaddingToggle,
				openSidebar,
				closeSidebar,
				handleSelectedElement,
			}}
		>
			{props.children}
		</Provider>
	);
};

export { ContextProvider };
export default Consumer;
