module.exports = displayOrder;

const numbers = [5, 2, 9, 1, 3];
function displayOrder(){
    for( let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if (numbers[i]>numbers[j]){
            let popCorn = numbers[i];
            numbers[i] = numbers[j];
            numbers[j]= popCorn;
        }
    }
}
}
displayOrder();
console.log(numbers);