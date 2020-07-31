import React from 'react';
import { ReactComponent as LayoutBuildingIllustration } from './assets/building_layout.svg';
import { ReactComponent as LinkGeneratingIllustration } from './assets/generating_link.svg';
import { ReactComponent as LinkSharingIllustration } from './assets/sharing_link.svg';
import {
	Navbar,
	FlexContainer,
	BottomBar,
	Sidebar,
	LoadingScreen,
	Onboarding,
} from './components';

const Flexo = () => (
	<>
		<Onboarding
			showOnboarding={true}
			pages={[
				{
					illustration: <LayoutBuildingIllustration />,
					title: 'Learn By Building',
					description:
						'This is a tool for building layouts using CSS Flexbox. You can change the properties of any block and see immediate changes happened with the layout.',
				},
				{
					illustration: <LinkGeneratingIllustration />,
					title: 'Generate Unique View Link',
					description:
						'When you are done with your layout, just press the share button. It’ll give you an unique link for the view you’ve made.',
				},
				{
					illustration: <LinkSharingIllustration />,
					title: 'Share With Love',
					description:
						'Share the link with your friends and let them know about your approach to make this view.',
				},
			]}
		/>
		<LoadingScreen />
		<Navbar />
		<FlexContainer />
		<BottomBar />
		<Sidebar />
	</>
);

export default Flexo;
