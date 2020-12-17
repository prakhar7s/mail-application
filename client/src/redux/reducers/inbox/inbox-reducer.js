import inboxActionTypes from "./inbox-types";

const intialState = {
  inboxMails: [
    {
      id: 1,
      sentBy: "johndoe@gmail.com",
      subject: "Wedding Invigation",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur perferendis corporis consectetur a quo eum error hic minus quae, sint rerum quaerat unde, et aperiam repellat ullam quos quam doloremque.111",
      timestamp: "jan 03, 2015 23:00",
    },
    {
      id: 2,
      sentBy: "johndoe@gmail.com",
      subject: "Wedding Invigation",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur perferendis corporis consectetur a quo eum error hic minus quae, sint rerum quaerat unde, et aperiam repellat ullam quos quam doloremque.222",
      timestamp: "jan 03, 2015 23:00",
    },
    {
      id: 3,
      sentBy: "johndoe@gmail.com",
      subject: "Wedding Invigation",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur perferendis corporis consectetur a quo eum error hic minus quae, sint rerum quaerat unde, et aperiam repellat ullam quos quam doloremque.333",
      timestamp: "jan 03, 2015 23:00",
    },
    {
      id: 4,
      sentBy: "johndoe@gmail.com",
      subject: "Wedding Invigation",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur perferendis corporis consectetur a quo eum error hic minus quae, sint rerum quaerat unde, et aperiam repellat ullam quos quam doloremque444.",
      timestamp: "jan 03, 2015 23:00",
    },
    {
      id: 5,
      sentBy: "johndoe@gmail.com",
      subject: "Wedding Invigation",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur perferendis corporis consectetur a quo eum error hic minus quae, sint rerum quaerat unde, et aperiam repellat ullam quos quam doloremque555.",
      timestamp: "jan 03, 2015 23:00",
    },
  ],

  aboutMail: {},
};
const inboxReducer = (state = intialState, action) => {
  switch (action.type) {
    case inboxActionTypes.GET_INBOX_MAIL_BY_ID:
      return state.inboxMails.filter((mail) => mail.id === parseInt(action.id));
    default:
      return {
        ...state,
      };
  }
};

export default inboxReducer;
