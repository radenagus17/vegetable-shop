const yyyymmdd = require("./formateDate");

const generateItemKode = (id, name, createdAt) => {
  return `${name.split(" ").join("_")}${yyyymmdd(createdAt)}-00${id}`;
};

module.exports = generateItemKode;
