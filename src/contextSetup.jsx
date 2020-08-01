import React, { createContext, useState, useEffect } from 'react';
import firebase from './dbConfig';

const { Consumer, Provider } = createContext();
const ContextProvider = (props) => {
	const [appState, setAppState] = useState({
		showMainAxis: true,
		showCrossAxis: true,
		addPadding: true,
		showSidebar: false,
		sidebarPosition: 'right',
		selectedElement: {
			type: '',
			id: null,
		},
		containerStyles: {
			display: 'flex',
			children: 1,
			flexDirection: 'row',
			flexWrap: 'nowrap',
			justifyContent: 'flex-start',
			alignItems: 'stretch',
			alignContent: 'stretch',
		},
		children: [
			{
				id: 1,
				childStyles: {
					order: '0',
					flexBasis: 'auto',
					flexGrow: '0',
					flexShrink: '1',
					alignSelf: 'auto',
				},
			},
		],
	});
	const [loadingState, setLoadingState] = useState({
		isLoading: true,
		removeLoadingScreenFromDOM: false,
	});
	const [toastState, setToastState] = useState({
		isShown: false,
		shareID: 'No ID to share',
	});

	useEffect(() => {
		const fetchView = async () => {
			const urlSegments = window.location.href.split('?shareID=');
			const urlSegmentsAfterFilteringLinkAssignedByFB =
				urlSegments.length > 1
					? urlSegments[1].split('&flexoclid=1')
					: '';
			const sharedViewID = urlSegmentsAfterFilteringLinkAssignedByFB[0];
			const db = firebase.database();
			const sharedView = sharedViewID
				? await (
						await db
							.ref(`sharedViews/${sharedViewID}`)
							.once('value')
				  ).val()
				: null;

			return sharedView
				? setAppState(
						{ ...sharedView },
						setLoadingState((preState) => ({
							...preState,
							isLoading: false,
						}))
				  )
				: setLoadingState((preState) => ({
						...preState,
						isLoading: false,
				  }));
		};

		fetchView();
	}, []);

	useEffect(() => {
		if (!loadingState.isLoading) {
			setTimeout(() => {
				setLoadingState((preState) => ({
					...preState,
					removeLoadingScreenFromDOM: true,
				}));
			}, 3500);
		}
	}, [loadingState.isLoading]);

	const pushViewIntoDB = async () => {
		const db = firebase.database();
		const referenceOfpushedView = await db
			.ref('sharedViews')
			.push(appState);
		return setToastState({
			isShown: true,
			shareID: `${window.location.origin}/?shareID=${referenceOfpushedView.key}&flexoclid=1`,
		});
	};

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

	const changeSidebarPosition = (position) =>
		setAppState((preState) => ({
			...preState,
			sidebarPosition: position,
		}));

	const closeSidebar = () =>
		setAppState((preState) => ({
			...preState,
			showSidebar: false,
		}));

	const handleSelectedElement = (elementType, id) =>
		setAppState((preState) => ({
			...preState,
			selectedElement: { type: elementType, id },
		}));

	const processPropertyValue = (styleObj, propertyName, propertyValue) => {
		if (
			propertyValue.split('')[0] === '+' ||
			propertyValue.split('')[0] === '-'
		) {
			const calculatedValue =
				parseInt(styleObj[propertyName], 10) +
				parseInt(propertyValue, 10);

			if (
				(propertyName === 'flexGrow' ||
					propertyName === 'flexShrink') &&
				calculatedValue < 0
			) {
				return '0';
			}

			if (propertyName === 'children' && calculatedValue < 1) {
				return '1';
			}

			return calculatedValue.toString();
		}

		return propertyValue;
	};

	const createOrDestroyChildren = (numberOfChildren) => {
		const defaultChildStyles = {
			order: '0',
			flexBasis: 'auto',
			flexGrow: '0',
			flexShrink: '1',
			alignSelf: 'auto',
		};
		const remainingChildren = [...appState.children];
		const childrenNumberDifference =
			numberOfChildren - remainingChildren.length;

		if (childrenNumberDifference > 0) {
			for (let i = 0; i < childrenNumberDifference; i++) {
				remainingChildren.push({
					id: remainingChildren.length + 1,
					childStyles: { ...defaultChildStyles },
				});
			}
		} else if (childrenNumberDifference < 0) {
			const splicingIndex =
				remainingChildren.length - Math.abs(childrenNumberDifference);
			remainingChildren.splice(
				splicingIndex,
				Math.abs(childrenNumberDifference)
			);
		}

		return setAppState((preState) => ({
			...preState,
			children: [...remainingChildren],
		}));
	};

	const handleCssPropertyChange = (childId, propertyName, propertyValue) => {
		if (childId) {
			const childrenAfterStyleUpdate = [...appState.children];

			childrenAfterStyleUpdate[childId - 1].childStyles[
				propertyName
			] = processPropertyValue(
				childrenAfterStyleUpdate[childId - 1].childStyles,
				propertyName,
				propertyValue
			);

			return setAppState((preState) => ({
				...preState,
				children: childrenAfterStyleUpdate,
			}));
		} else {
			const containerAfterStyleUpdate = {
				...appState.containerStyles,
			};

			containerAfterStyleUpdate[propertyName] = processPropertyValue(
				containerAfterStyleUpdate,
				propertyName,
				propertyValue
			);

			if (propertyName === 'children') {
				createOrDestroyChildren(
					containerAfterStyleUpdate[propertyName]
				);
			}

			return setAppState((preState) => ({
				...preState,
				containerStyles: containerAfterStyleUpdate,
			}));
		}
	};

	return (
		<Provider
			value={{
				appState,
				loadingState,
				toastState,
				handleMainAxisToggle,
				handleCrossAxisToggle,
				handlePaddingToggle,
				openSidebar,
				closeSidebar,
				changeSidebarPosition,
				handleSelectedElement,
				handleCssPropertyChange,
				pushViewIntoDB,
				setToastState,
			}}
		>
			{props.children}
		</Provider>
	);
};

export { ContextProvider };
export default Consumer;
