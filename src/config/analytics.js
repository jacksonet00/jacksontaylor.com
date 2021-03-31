import firebase from 'firebase';
import firebaseConfig from './config';

firebase.initializeApp(firebaseConfig);
const analytics = firebase.analytics();

export default analytics;
