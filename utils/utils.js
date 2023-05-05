// 1. Check if data is array or single object Split logic based on that
// 2. Get all properties names of object (Using Object.keys() function)
// 3. Save all max lengths of peroperties values (example: {'propertyName1': 10, 'propertyName2': 15})
// 4. Add whitespaces for all values in string to match max length of column (property value)
// метод який поверне максимальну довжину колонки 
// написати свій метод який  приймає масив і назву властивостей і повернеться максимальне по довжинні значення

import { users } from "../mockData/mockUsers.js";

function maxPropertyLength(arr) {
    let result = ``,
        maxLength = {id : ``, firstName : ``, lastName : ``, age : ``, gender : ``},
        length = {id : 0, firstName  : 0, lastName : 0, age : 0, gender : 0};
        
    for (let i = 0; i < arr.length; i++) {
        
        if (length.id < String(arr[i].id).length) {
            length.id = String(arr[i].id).length;
        } 
        if (length.firstName < arr[i].firstName.length) {
            length.firstName = arr[i].firstName.length;
        }
        if (length.lastName < arr[i].lastName.length) {
            length.lastName = arr[i].lastName.length;
        }
        if (length.age < String(arr[i].age).length) {
            length.age = String(arr[i].age).length;
        }
        if (length.gender < arr[i].gender.length) {
            length.gender = arr[i].gender.length;
        }
    }
    maxLength.id = `Max Id length = ${length.id}`;
    maxLength.firstName = `Max firstName length = ${length.firstName}`;
    maxLength.lastName = `Max lastName length = ${length.lastName}`;
    maxLength.age = `Max age length = ${length.age}`;
    maxLength.gender = `Max gender length = ${length.gender}`;

    result = `${maxLength.id}\n${maxLength.firstName}\n${maxLength.lastName}\n${maxLength.age}\n${maxLength.gender}\n`;
    return result;
}
maxPropertyLength(users);