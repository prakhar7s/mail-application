import userActionTypes from "./user-types";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case userActionTypes.SIGN_IN:
      return { ...state, user: action.payload };

    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
