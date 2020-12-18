import mailActionTypes from "./mail-types";

const intialState = {
  inboxMails: [],
  sentMails: [],
  drafts: [],
  trashedMails: [],
};
const mailReducer = (state = intialState, action) => {
  switch (action.type) {
    case mailActionTypes.SET_INBOX_MAILS:
      return {
        ...state,
        inboxMails: action.inboxMails,
      };
    case mailActionTypes.SET_SENT_MAILS:
      return {
        ...state,
        sentMails: action.sentMails,
      };
    case mailActionTypes.SET_DRAFT_MAILS:
      return {
        ...state,
        drafts: action.drafts,
      };
    case mailActionTypes.SET_TRASHED_MAILS:
      return {
        ...state,
        trashedMails: action.trashedMails,
      };
    default:
      return {
        ...state,
      };
  }
};

export default mailReducer;
