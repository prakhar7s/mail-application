const express = require("express");
const generateID = require("./generate-id");
const passEncrypter = require("./password_encrypter/password-encrypter");
const cors = require("cors");
const db = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "prakhar",
    password: "1234",
    database: "gigamail",
  },
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/signin", (req, response) => {
  const { gigamail, password } = req.body;

  db("users")
    .where({ gigamail })
    .then((res) => {
      if (res.length >= 1) {
        const encrypted = res[0].password;
        passEncrypter.compare(password, encrypted).then((result) => {
          if (result) {
            const user = {
              name: res[0].name,
              userid: res[0].userid,
              gigamail: res[0].gigamail,
            };
            response.json({ isMatched: true, user });
          } else {
            response.json({ isMatched: false });
          }
        });
      } else {
        response.json({ isMatched: false });
      }
    })
    .catch((err) => console.log(err));
});

// SignUp
app.post("/signup", (req, response) => {
  const { name, gigamail, password } = req.body;

  db("users")
    .where({ gigamail })
    .then((res) => {
      if (res.length) {
        response.json({ msg: "gigamail already resgistered" });
      } else {
        const userid = generateID();
        const hashed = passEncrypter.encrypt(password);

        db("users")
          .insert({
            name,
            userid,
            gigamail,
            password: hashed,
          })
          .then((res) => {
            response.json({ msg: "User registered successfully." });
          })
          .catch((err) => {
            response.json({ msg: err.msg });
          });
      }
    });
});

app.post("/inbox", (req, response) => {
  const { gigamail } = req.body;

  if (gigamail) {
    db.column("mails.mailid", "sender", "at", "body", "sub")
      .where({ receiver: gigamail, receiverstatus: 0 })
      .from("mails")
      .innerJoin("mail_details", "mails.mailid", "mail_details.mailid")
      .then((res) => {
        if (res.length !== 0) {
          response.json({ inboxMails: res, isMails: true });
        } else {
          response.json({ isMails: false });
        }
      });
  }
});

app.post("/sent", (req, response) => {
  const { gigamail } = req.body;

  if (gigamail) {
    db.column("mails.mailid", "receiver", "at", "body", "sub")
      .where({ sender: gigamail, senderstatus: 0 })
      .from("mails")
      .innerJoin("mail_details", "mails.mailid", "mail_details.mailid")
      .then((res) => {
        if (res.length !== 0) {
          response.json({ sentMails: res, isMails: true });
        } else {
          response.json({ isMails: false });
        }
      });
  }
});

app.post("/create-mail", async (req, resp) => {
  const { user, to, subject, body } = req.body;

  const mailid = generateID(5);

  console.log(mailid);

  await db
    .column("name")
    .where({ gigamail: to })
    .from("users")
    .then((res) => {
      if (res.length > 0 && res[0].name !== "") {
        db("mails")
          .insert({
            mailid,
            at: new Date(),
            sub: subject,
            body,
          })
          .then(async (res) => {
            console.log(res);

            await db("mail_details")
              .insert({
                mailid,
                sender: user,
                receiver: to,
              })
              .then((res) => {
                console.log(res);
                resp.json({ msg: "Mail sent!" });
              })
              .catch((err) => resp.json({ msg: err.msg }));
          })
          .catch((err) => resp.json({ msg: err.msg }));
      }
    });

  resp.json({ msg: "something went wrong." });
});

// db("mails")
//   .insert([
//     {
//       mailid: "313sda",
//       at: "2000-2-2 23:34:00",
//       sub: "Energy Sources",
//       body:
//         "In this paper, you would explore the history of alternative energy supplies and you can explore alternative energy sources for new developments. The core question could center around sufficient energy options to manage the needs of the world’s population. An energy source is a debate that is ongoing, particularly in developing nations which could make for interesting case studies. ",
//     },
//     {
//       mailid: "dasdada43",
//       at: "2012-3-5 04:50:00",
//       sub: "Political Environment in the Middle East",
//       body:
//         "The Middle East has had a long history of conflict and is at the center of many debates as world leaders look for solutions.Who knows?Your paper might come up with much-needed innovation to bring peace to the area. For instance, you could examine the history of nations in the region and their interaction, noting possible avenues for peace.",
//     },
//     {
//       mailid: "424fsf",
//       at: "2020-12-14 03:34:09",
//       sub: "Imposed Democracy",
//       body:
//         "Democracy is an ideal held high by many nations and the United States is behind pioneering the concept after World II.In fact, the US is mainly behind influencing other countries in the world to adopt democracy. You could work on a paper interrogating the role the US has played in other nations and how it has imposed democracy in other nations.",
//     },
//   ])
//   .then((res) => console.log(res, res.rowCount));

// db("mail_details")
//   .insert([
//     {
//       mailid: "313sda",
//       sender: "prakhar@gigamail.com",
//       receiver: "prakhar2@gigamail.com",
//     },
//     {
//       mailid: "dasdada43",
//       sender: "prakhar@gigamail.com",
//       receiver: "prakhar2@gigamail.com",
//     },
//     {
//       mailid: "424fsf",
//       sender: "prakhar2@gigamail.com",
//       receiver: "prakhar@gigamail.com",
//     },
//   ])
//   .then((res) => console.log(res.rowCount));

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
