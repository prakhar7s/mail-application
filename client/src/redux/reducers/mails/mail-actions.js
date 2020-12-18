import mailActionTypes from "./mail-types";

export const setInboxMails = (inboxMails) => {
  return {
    type: mailActionTypes.SET_INBOX_MAILS,
    inboxMails,
  };
};
export const setSentMails = (sentMails) => {
  return {
    type: mailActionTypes.SET_SENT_MAILS,
    sentMails,
  };
};

export const setDrafts = (drafts) => {
  return {
    type: mailActionTypes.SET_DRAFT_MAILS,
    drafts,
  };
};

export const setThrashedMails = (trashedMails) => {
  return {
    type: mailActionTypes.SET_TRASHED_MAILS,
    trashedMails,
  };
};
