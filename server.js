const express = require("express");
const uuid = require("uuid");
const passEncrypter = require("./password_encrypter/password-encrypter");
const db = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "postgres",
  },
});

function insertMail(subject, sentby, sentat, body) {
  const mailid = uuid.v4();
  db("inbox_mails")
    .insert([{ mailid, subject, sentby, sentat, body }])
    .then(({ command, rowCount }) => console.log(`${rowCount} --> ${command}`))
    .catch((err) => console.log(err));
}

function allMails() {
  db.select()
    .table("inbox_mails")
    .then((rows) => console.log(rows));
}

const delAllMAils = () => {
  db("inbox_mails")
    .del()
    .then((res) => console.log(res));
};
// insertMail("dsads", "sdada", "2000-12-12 23:56:33", "sdasdadasdasda");
// allMails();
// delAllMAils();

const app = express();

const PORT = process.env.PORT || 5000;

app.post("/signin", (req, res) => {
  console.log(req, "ssd");
});

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
