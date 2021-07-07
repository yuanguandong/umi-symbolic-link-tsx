const { existsSync } = require("fs");

const exists = existsSync("umiapp/src/pages/symboliclinkpage/index.tsx");

console.log("exists", exists);
