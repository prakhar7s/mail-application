const db = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "postgres",
    database: "postgres",
  },
});

function hashedPassword(length = 24) {
  const chars =
    "AiBk9C5<{%tvExF3oGHI8#d4%4gq%b$3MNy^OuP4Q@6}(cch35536$34~U32!7s)d#1d24$#z3$8W>@^@X$##YZ";
  var rand = 0;
  var hashed = "";
  for (let i = 0; i < length; i++) {
    rand = Math.floor(Math.random() * chars.length);
    hashed += chars[rand];
  }
  return hashed;
}

function getHelp() {
  return "functions: encrypted/false encrypt(normal), bool compare(encrypted)";
}

function encrypt(normal) {
  const encrypted = hashedPassword();
  if (normal && encrypted) {
    return db("password_encrypter")
      .insert({ normal, encrypted })
      .then((res) => {
        return encrypted;
      })
      .catch((err) => {
        return false;
      });
  }
}

async function compare(normal, encrypted) {
  return await db("password_encrypter")
    .where({ normal, encrypted })
    .then((res) => (res.length ? true : false));
}

async function getAll() {
  return await db
    .select()
    .table("password_encrypter")
    .then((rows) => rows);
}

module.exports = {
  getHelp,
  encrypt,
  compare,
  getAll,
};
