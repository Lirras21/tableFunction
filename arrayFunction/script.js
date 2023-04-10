const usersData = {
    id: 1,
    firstName: '',
    lastName: '',
    age: 0,
    gender: ''
  };
  const users = [
      {
          id: 1,
          firstName: 'Nazar',
          lastName: 'Velichko',
          age: 21,
          gender: 'Male'
      },
      {
          id: 2,
          firstName: 'Mykola',
          lastName: 'Staryi',
          age: 25,
          gender: 'Male'
      },
      {
          id: 3,
          firstName: 'Petro',
          lastName: 'Shchur',
          age: 28,
          gender: 'Male'
      },
      {
          id: 4,
          firstName: 'Angelina',
          lastName: 'Moroz',
          age: 45,
          gender: 'Female'
      },
      {
          id: 5,
          firstName: 'Viktoria',
          lastName: 'Danko',
          age: 27,
          gender: 'Female'
      },
      {
          id: 6,
          firstName: 'Oleh',
          lastName: 'Chornenkyi',
          age: 20,
          gender: 'Male'
      },
      {
          id: 7,
          firstName: 'Yura',
          lastName: 'Velichko',
          age: 19,
          gender: 'Male'
      },
      {
          id: 8,
          firstName: 'Dmytro',
          lastName: 'Popko',
          age: 22,
          gender: 'Male'
      },
      {
          id: 9,
          firstName: 'Anton',
          lastName: 'Velichko',
          age: 17,
          gender: 'Male'
      },
      {
          id: 10,
          firstName: 'Alina',
          lastName: 'Shuba',
          age: 17,
          gender: 'Female'
      }
  ];
  
  function arrayToTable(users) {
     let result = '|ID|\t\t\t|FN|\t\t\t\t|LN|\t\t\t\t|A|\t\t\t\t|G|\n'
     for (let i = 0; i < users.length; i++){
       if (users[i].firstName.length >= 8) {
          result += ` ${users[i].id}\t\t\t\t${users[i].firstName}\t\t\t${users[i].lastName}\t\t\t\t${users[i].age}\t\t\t\t${users[i].gender}\n`;
       } else if (users[i].lastName.length > 6) {
          result += ` ${users[i].id}\t\t\t\t${users[i].firstName}\t\t\t\t${users[i].lastName}\t\t\t${users[i].age}\t\t\t\t${users[i].gender}\n`;
       } else {
          result += ` ${users[i].id}\t\t\t\t${users[i].firstName}\t\t\t\t${users[i].lastName}\t\t\t\t${users[i].age}\t\t\t\t${users[i].gender}\n`;
       }
     }
     return result;
    }
    console.log(arrayToTable(users));