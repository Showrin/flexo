export default {
	display: ['flex', 'inline-flex'],
	children: ['+1', '+3', '+5', '+7', '-1', '-3', '-5', '-7'],
	'flex-direction': ['row', 'row-reverse', 'column', 'column-reverse'],
	'flex-wrap': ['nowrap', 'wrap', 'wrap-reverse'],
	'justify-content': [
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
	],
	'align-items': ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
	'align-content': [
		'stretch',
		'flex-start',
		'flex-end',
		'center',
		'space-between',
		'space-around',
		'space-evenly',
	],
};
