//#region > Imports
//> Reducers
// Authentication
import authReducer from "./authReducer";

//> Redux
import { combineReducers } from "redux";

//> Firestore reducer
import { firestoreReducer } from "redux-firestore";

//> Firebase reducer
import { firebaseReducer } from "react-redux-firebase";
//#endregion

//#region > Constants
// These constants can be accessed via mapStateToProps functions
const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer, // Authentication
});
//#endregion

//#region > Exports
export default rootReducer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
