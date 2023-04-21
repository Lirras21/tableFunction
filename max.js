import {users} from "./mockData/mockUsers.js";

function findMaxLength(data) {
    let maxIdLength = 0;
    let maxFirstNameLength = 0;
    let maxLastNameLength = 0;
    let maxAgeLength = 0;
    let maxGenderLength = 0;
 
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        maxIdLength = Math.max(maxIdLength, user.id.toString().length);
        maxFirstNameLength = Math.max(maxFirstNameLength, user.firstName.length);
        maxLastNameLength = Math.max(maxLastNameLength, user.lastName.length);
        maxAgeLength = Math.max(maxAgeLength, user.age.toString().length);
        maxGenderLength = Math.max(maxGenderLength, user.gender.length);


    }
    

    console.log('max length id -' , maxIdLength);
    console.log('max length firstName -' , maxFirstNameLength);
    console.log('max length lastName -' , maxLastNameLength);
    console.log('max length age -' , maxAgeLength);
    console.log('max length gender -' , maxGenderLength);
 }  
findMaxLength(users);