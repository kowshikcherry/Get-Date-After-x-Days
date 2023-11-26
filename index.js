//index.js

const addDays = require('date-fns/addDays')

let kowshik = function (days) {
  const result = addDays(new Date(2020, 7, 22), days)
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
}

module.exports = kowshik
