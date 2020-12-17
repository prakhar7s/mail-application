import { combineReducers } from "redux";

import inboxReducer from "./reducers/inbox/inbox-reducer";

const rootReducer = combineReducers({
  inbox: inboxReducer,
});

export default rootReducer;
