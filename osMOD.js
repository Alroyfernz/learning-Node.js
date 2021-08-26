const os = require("os");
console.log(`you are currently using ${os.arch()}`);

console.log(`your operating system type is ${os.type()}`);
const res = os.cpus();
const ans = res[0].model;
const ans1 = res[0].speed;
console.log(`CPU: ${ans}`);
console.log(` speed: ${ans1}`);
