import { users } from "../mockData/mockUsers.js";
import { usersData } from "../types/userDetails.js";


function convertArrayToTable(users) {
  let result = `|${usersData.id}|\t\t\t|${usersData.firstName}|\t\t\t\t|${usersData.lastName}|\t\t\t\t|${usersData.age}|\t\t\t\t|${usersData.gender}|\n`;
   for (let i = 0; i < users.length; i++) {
     let id = `${users[i].id}`,
         fN = `${users[i].firstName}`,
         lN = `${users[i].lastName}`,
         age = `${users[i].age}`,
         gender = `${users[i].gender}`;
      result += ` ${id.padEnd(14)} ${fN.padEnd(17)} ${lN.padEnd(22)} ${age.padEnd(13)} ${gender.padEnd(13)}\n`;
   }
   return result;
}
console.log(convertArrayToTable(users));
