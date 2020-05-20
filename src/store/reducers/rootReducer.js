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

//> Constant Variables
const rootReducer = combineReducers({
  auth: authReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer, // Authentication
});

//#region > Exports
export default rootReducer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
