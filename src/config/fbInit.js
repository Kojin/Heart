//#region > Imports
//> Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// Import secret credentials
import config from "./fbConfig.js";
//#endregion

// Init Firebase
firebase.initializeApp(config);

// timestampsInSnapshots: true already enabled by default
firebase.firestore();

//#region > Exports
export default firebase;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
