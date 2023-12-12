let Mock = require("mockjs");
let Random = Mock.Random;
// const fs = require("fs");
// const path = require("path");
// const rootDir = path.resolve();
// const src = path.join(rootDir, "src");
// fs.readdir(src, (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("存在文件", files);
//   }
// });
const data = { users: [] };
module.exports = function () {
  for (let i = 0; i < 100; i++) {
    const color =
      "#" +
      Random.integer(180, 255).toString(16) +
      Random.integer(140, 255).toString(16) +
      Random.integer(120, 220).toString(16);
    let user = {
      id: i,
      userId: Random.id(),
      name: Random.cname(),
      online: Random.integer(0, 1),
      age: Random.integer(20, 50),
      link: Random.url(),
      birth: Random.datetime("yyyy-MM-dd"),
      address: `${Random.province()}-${Random.city()}-${Random.county()}`,
      phone: Mock.mock(/^1[3456789]\d{9}$/),
      email: Random.email("qq.com"),
    };
    user.avatar = Random.image("200x200", color, user.name);
    // @ts-ignore
    data.users.push(user);
  }
  return data;
};
