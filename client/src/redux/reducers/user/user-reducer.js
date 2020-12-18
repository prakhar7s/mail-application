import userActionTypes from "./user-types";

const initialState = {
  user: sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN:
      return { ...state, user: action.payload };

    case userActionTypes.SIGN_OUT:
      return {
        ...state,
        user: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
