//#region > Functions
const signIn = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err,
        });
      });
  };
};

const signInAnonymous = (credentials) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInAnonymously()
      .then(() => {
        dispatch({
          type: "LOGIN_ANON_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ANON_ERROR",
          err,
        });
      });
  };
};

const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({
          type: "SIGNOUT_SUCCESS",
        });
      });
  };
};
//#endregion

//#region > Exports
export {
  signIn,
  signInAnonymous,
  signOut
}
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2019 Christian Aichner
 */
