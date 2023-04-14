//import { users } from "../mockData/mockUsers.js";
//import { usersData } from "../types/userDetails.js";


export function convertArrayToTable(data) {
 // 1. Check if data is array or single object Split logic based on that
 // 2. Get all properties names of object (Using Object.keys() function)
 // 3. Save all max lengths of peroperties values (example: {'propertyName1': 10, 'propertyName2': 15})
 // 4. Add whitespaces for all values in string to match max length of column (property value)

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
