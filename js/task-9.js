function isLoginValid (login, min = 4, max = 16) {
    // Write code under this line
    // console.log(login.length)
    if (login.length >= min && login.length <= max) {
        return true
    } else {return false}
    
  }
  
  function isLoginUnique  (allLogins, login) {
    'use strict';
    // Write code under this line
    if (allLogins.includes(login)) {
        return false
    } else {return true}
  }
  
  function addLogin (allLogins, login) {
    'use strict';
    const SUCCESS = 'Логин успешно добавлен!';
    const REFUSAL = 'Такой логин уже используется!';
    const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
    let message;
    // Write code under this line    

    // console.log(isLoginValid(login))
    // console.log(allLogins, login)
    // console.log(isLoginUnique(allLogins, login))
   
    if (isLoginValid(login) === false) {
        return message = ERROR
    } else if (isLoginUnique(allLogins, login) === false) {
        return message = REFUSAL
    } else {
        logins.unshift(login)
        // console.log(allLogins)
        console.log(logins)
        return message = SUCCESS
    }

  }
  //if (isLoginValid(login) && isLoginUnique(allLogins, login))
  
  let logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
//   console.log(addLogin(logins, 'kek'))
// console.log(isLoginUnique(logins, 'ajax'), isLoginValid('mamajaja'))
// console.log(addLogin(logins, '1234'))

  console.log(addLogin(logins, 'Ajax')); 
  // 'Логин успешно добавлен!'
  
  // console.log(addLogin(logins, 'robotGoogles')); 
  // 'Такой логин уже используется!'
  
  // console.log(addLogin(logins, 'Zod'));
  // 'Ошибка! Логин должен быть от 4 до 16 символов'
  
  // console.log(addLogin(logins, 'jqueryisextremelyfast')); 
  // 'Ошибка! Логин должен быть от 4 до 16 символов' 