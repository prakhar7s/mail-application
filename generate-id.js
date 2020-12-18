module.exports = function () {
  const chars =
    "A0jB5C8x4DmEywkdFGz6H1plIJK94jL7vMbeoNO36aPuQq5fRnc49STrsgUtV6Wh0XYZ";
  var userid = "";
  for (let i = 0; i < 8; i++) {
    userid += chars[Math.floor(Math.random() * chars.length)];
  }

  return userid;
};
