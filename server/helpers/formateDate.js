function yyyymmdd(dateIn) {
  var yyyy = dateIn.getFullYear();
  var mm = dateIn.getMonth() + 1; // getMonth() is zero-based
  var dd = dateIn.getDate();
  return String(10000 * yyyy + 100 * mm + dd); // Leading zeros for mm and dd
}

var today = new Date();
// console.log(yyyymmdd(today));
module.exports = yyyymmdd;
