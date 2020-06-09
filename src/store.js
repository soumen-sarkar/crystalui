import firebase from "firebase/app";
import "firebase/firestore"; // <- needed if using firestore
import { createStore, combineReducers, compose } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore

const fbConfig = {
    apiKey: "AIzaSyCOSvvAjojteoOeQQT047gpZ4U4cIO9TvQ",
    authDomain: "soumen-2b3f5.firebaseapp.com",
    databaseURL: "https://soumen-2b3f5.firebaseio.com",
    projectId: "soumen-2b3f5",
    storageBucket: "soumen-2b3f5.appspot.com",
    messagingSenderId: "786214227751",
    appId: "1:786214227751:web:11741278807cfe81126302",
    measurementId: "G-990SX8051W"
};

// Initialize firebase instance
firebase.initializeApp(fbConfig);

// Initialize other services on firebase instance
firebase.firestore(); // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer, // <- needed if using firestore
});

// Check localStorage and init settings value.
// if (localStorage.getItem("settings") == null) {
//   const defaultSetting = {
//     disableBalanceOnAdd: true,
//     disableBalanceOnEdit: false,
//     allowRegistration: false
//   };
//   localStorage.setItem("settings", JSON.stringify(defaultSetting));
// }

// Create store with reducers and initial state
const initialState = {
  // settings: JSON.parse(localStorage.getItem("settings"))
};
const store = createStore(
  rootReducer,
  initialState,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
