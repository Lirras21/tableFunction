import { users } from "./mockData/mockUsers.js";


function listPropertiesNames(data) {
  let propertiesNames = '';
  for (let i = 0; i < data.length; i++) {
    propertiesNames += `${Object.keys(users[i]).join('\t')} \n`;
  }

  return propertiesNames
}
console.log(listPropertiesNames(users));