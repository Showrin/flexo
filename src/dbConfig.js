import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

const dbConfig = {
	apiKey: 'AIzaSyCJLzsi8YM5btEU-0UlWLTBo0UmU64P6WI',
	authDomain: 'app-flexo.firebaseapp.com',
	databaseURL: 'https://app-flexo.firebaseio.com',
	projectId: 'app-flexo',
	storageBucket: 'app-flexo.appspot.com',
	messagingSenderId: '393815376344',
	appId: '1:393815376344:web:0ef62eb529db9ea5ceb2ad',
	measurementId: 'G-HLJLXTQZT2',
};

firebase.initializeApp(dbConfig);
firebase.analytics();

export default firebase;
