// основний файл,
//  функція formatTable  має приймати на вхід масив елемнтів і повертати довгу стрінгу з табуляціями і тд щоб була таблиця в консолі
import { users } from "./mockData/mockUsers.js";

function formatTable(arr) {
    let result = ``;
    
    result  = `${Object.keys(arr[0]).join('\t\t  ')}\n`
    for (let i = 0; i < arr.length; i++) {
        let id = String(arr[i].id);
        let age = String(arr[i].age);
        result += `${id.padEnd(10)}\t${arr[i].firstName.padEnd(10)}\t${arr[i].lastName.padEnd(15)}\t${age.padEnd(10)}\t${arr[i].gender.padEnd(10)}\n`
    }
    return result;
}
formatTable(users);
// I don't know how do it with out (dadEnd).
