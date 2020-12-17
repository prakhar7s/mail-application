import inboxActionTypes from "./inbox-types";

export const getInboxMail = (id) => {
  console.log(id);

  return {
    type: inboxActionTypes.GET_INBOX_MAIL_BY_ID,
    id: id,
  };
};
