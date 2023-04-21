// 1. Check if data is array or single object Split logic based on that
// 2. Get all properties names of object (Using Object.keys() function)
// 3. Save all max lengths of peroperties values (example: {'propertyName1': 10, 'propertyName2': 15})
// 4. Add whitespaces for all values in string to match max length of column (property value)
import { users } from "../mockData/mockUsers.js";

function saveMaxPropertyLengths() {
  const maxLengths = {};

  for (const user of users) {
    for (const property in user) {
      if (user.hasOwnProperty(property)) {
        if (maxLengths.hasOwnProperty(property)) {
          maxLengths[property] = Math.max(maxLengths[property], user[property].toString().length);
        } else {
          maxLengths[property] = user[property].toString().length;
        }
      }
    }
  }

  return maxLengths;
}
// console.log(saveMaxPropertyLengths(users));

function formatTable() {
  const maxLengths = saveMaxPropertyLengths();

  for (const user of users) {
    for (const property in user) {
      if (user.hasOwnProperty(property)) {
        const value = user[property].toString();
        const padding = ' '.repeat(maxLengths[property] - value.length);
        user[property] = value + padding;
      }
    }
  }

  let table = '';
  for (const property in users[0]) {
    if (users[0].hasOwnProperty(property)) {
      table += property.padEnd(maxLengths[property]) + '\t\t';
    }
  }
  table += '\n';
  for (const user of users) {
    for (const property in user) {
      if (user.hasOwnProperty(property)) {
        table += user[property] + '\t\t';
      }
    }
    table += '\n';
  }
  return table;
}
console.log(formatTable(users));




