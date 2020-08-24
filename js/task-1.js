const getItemsString = function(anyArray) {
  
    // Write code under this line
    let message = '';
    for (let i = 0; i < anyArray.length; i += 1) {
      let word = '';
        word = `${i + 1} - ${anyArray[i]}`.concat('\n');
        console.log(word);
        message += word;
    }
    // console.log(`array lenght in function: ${array}`);
    // console.log(array.lenght);
    // for (let i = 0; i < 1; i += 1) {
    //     // console.log(1);
    // }
    // for (let word of array) {
    //     let number = array.indexOf(word)+1;
    //     word = `${number} - ${word}`.concat('\n');
    //     console.log(word);
    //     message += word;
    // }
    return message;
  };
  
 const oldArray = ['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong'];
 getItemsString(oldArray);
//  console.log(getItemsString(oldArray))
    
  //console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
  /*
  '1 - Mango
  2 - Poly
  3 - Ajax
  4 - Lux
  5 - Jay
  6 - Kong
  '
  */
  
//   console.log(getItemsString([5, 10, 15]));
  /*
  '1 - 5
  2 - 10
  3 - 15
  '
  */