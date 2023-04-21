import { users } from "./mockData/mockUsers.js";

function checkIsArrayOrObject(value) {
  if (Array.isArray(value)) {
    return 'array';
  } else if (typeof value === 'object' && value !== null) {
    return 'Object';
  } else {
    return 'Not an array or object';
  }
}
console.log(checkIsArrayOrObject(users));