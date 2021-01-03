module.exports = function (length = 8) {
  const chars =
    "A0jB5C8x4DmEywkdFGz6H1plIJK94jL7vMbeoNO36aPuQq5fRnc49STrsgUtV6Wh0XYZ";
  var userid = "";
  for (let i = 0; i < length; i++) {
    userid += chars[Math.floor(Math.random() * chars.length)];
  }

  return userid;
};
