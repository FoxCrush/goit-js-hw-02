const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
    return message.split(' ').length * pricePerWord
}
 // Write code in this line

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100
// const calculateEngravingPrice = function (message, pricePerWord) {
    

//     cost = message.split(' ').length * pricePerWord

//     return pricePerWord;
// } 
// let myMessage = 'asd asd aedfg asdf adf';
// let myPricePerWord = 3;
// let cost = 0;
// calculateEngravingPrice('myMessage', 100)

// Write code in this line


// console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100