module.exports = displayNumber;

const nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function displayNumber(){
    for(let i=0; i < nombres.length; i++){
        console.log(nombres[i]);
    }
    
}
displayNumber();