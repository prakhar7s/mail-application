import { combineReducers } from "redux";

import inboxReducer from "./reducers/inbox/inbox-reducer";

import userReducer from "./reducers/user/user-reducer";

const rootReducer = combineReducers({
  inbox: inboxReducer,
  user: userReducer,
});

export default rootReducer;
