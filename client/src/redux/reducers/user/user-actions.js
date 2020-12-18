import userActionTypes from "./user-types";

export const userSignIn = (user) => {
  return {
    type: userActionTypes.SIGN_IN,
    payload: user,
  };
};
