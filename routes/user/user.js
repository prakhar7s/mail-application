const express = require("express");

const route = express.Router();

route.post("/login", (req, res) => {});

module.exports = route;
function insertMail(sentto, sentby, sentat, subject, body) {
  const mailid = "";
  db("Mails")
    .insert([{ mailid, sentto, sentby, sentat, subject, body }])
    .then(({ command, rowCount }) => console.log(`${rowCount} --> ${command}`))
    .catch((err) => console.log(err));
}

function allMails() {
  db.select()
    .table("Mails")
    .then((rows) => console.log(rows));
}

const delAllMAils = () => {
  db("Mails")
    .del()
    .then((res) => console.log(res));
};
