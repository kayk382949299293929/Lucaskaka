const fs = require("fs");
const path = require("path");

function countUserMessage(userJid) {
  const users = JSON.parse(
    fs.readFileSync(path.join(__dirname, "..", "database", "users.json"))
  );

  if (users.length) {
    const user = users.find((user) => user.user_jid === userJid);
    if (!user) {
      const newUser = { user_jid: userJid, total_messages: 0 };
      users.push(newUser);
      fs.writeFileSync(
        path.join(__dirname, "..", "database", "users.json"),
        JSON.stringify(users)
      );
    } else {
      const index = users.indexOf(user);
      if (index > -1) {
        users.splice(index, 1);
      }
      user.total_messages += 1;
      users.push(user);
      fs.writeFileSync(
        path.join(__dirname, "..", "database", "users.json"),
        JSON.stringify(users)
      );
    }
  }
}

module.exports = {
  countUserMessage,
};