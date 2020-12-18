import { combineReducers } from "redux";

import MailReducer from "./reducers/mails/mail-reducer";

import userReducer from "./reducers/user/user-reducer";

const rootReducer = combineReducers({
  mails: MailReducer,
  user: userReducer,
});

export default rootReducer;
