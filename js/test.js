const myFunction = function(anyArray) {

    console.log(`log from fn`, anyArray)
    console.log(`log from fn`, typeof(anyArray))
    console.log(`log from fn`, anyArray.length)
    for (let i = 0; i < anyArray.length; i += 1) {
        console.log(`interation number`, i + 1)
    }
}
const myNumbArray = [1, 2, 3]
const myStringArray = ['he', 'hi', 'what', 'lol', 'swag']
console.log(`log from main`, myNumbArray)
console.log(`log from main`, typeof(myNumbArray))
console.log(`log from main`, myNumbArray.length)

myFunction (myStringArray)