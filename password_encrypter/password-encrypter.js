const db = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "prakhar",
    password: "1234",
    database: "gigamail",
  },
});

function hashedPassword(length = 12) {
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

function encrypt(normal) {
  const hashed = hashedPassword();
  if (normal && hashed) {
    db("hashed_passwords")
      .insert({ normal, hashed })
      .then((res) => {})
      .catch((err) => {
        return false;
      });
  }
  return hashed;
}

async function compare(normal, hashed) {
  return await db("hashed_passwords")
    .where({ normal, hashed })
    .then((rows) => {
      if (rows.length) {
        return true;
      } else {
        return false;
      }
    });
}

module.exports = {
  encrypt,
  compare,
};
