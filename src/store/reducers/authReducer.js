//> Constant Variables
/**
 * Have initial state for when state is not ready to be passed.
 *
 * @constant
 */
const INIT_STATE = {
  authError: null,
  authErrorDetails: null,
};

//#region > Functions
const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Error", action.err);
      return {
        ...state,
        authErrorDetails: action.err,
      };
    case "LOGIN_SUCCESS":
      console.log("Login success");
      return {
        ...state,
        authErrorDetails: null,
      };
    case "LOGIN_ANON_SUCCESS":
      console.log("Login of anonymous user success");
      return {
        ...state,
        authErrorDetails: null,
      };
    case "LOGIN_ANON_ERROR":
      console.log("Could not login as anonymous user");
      return {
        ...state,
        authErrorDetails: action.err,
      };
    case "SIGNOUT_SUCCESS":
      console.log("Signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("Signup success");
      return {
        ...state,
        authError: null,
        authErrorDetails: null,
      };
    case "SIGNUP_ERROR":
      console.log("Signup error", action.err);
      return {
        ...state,
        authErrorCode: action.errCode,
        authError: action.err.message,
        authErrorDetails: action.err,
      };
    default:
      return state;
  }
};
//#endregion

//#region > Exports
export default authReducer;
//#endregion

/**
 * SPDX-License-Identifier: (EUPL-1.2)
 * Copyright © 2020 Werbeagentur Christian Aichner
 */
