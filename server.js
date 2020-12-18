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

// db("users")
//   .where({ gigamail: "prakhar@gigamail.com" })
//   .then((res) => {
//     console.log(res);

//     passEncrypter
//       .compare("prakharbhai@123", "@dWdvbs4N!b>")
//       .then((res) => console.log(res));
//   });

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
