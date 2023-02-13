function average(numbers) {
    var sum = 0;
  
    for (var i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    var average = sum / numbers.length;
    return { sum: sum, average: average };
  }
  
  var result = average([20, 12, 8, 9]);
  
  console.log(result.average);

  module.exports = average;
