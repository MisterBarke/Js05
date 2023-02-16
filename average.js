function average() {
  var notes = [20, 12, 8, 9];
    var sum = 0;
    let average1=0;
  
    for (var i = 0; i < notes.length; i++) {
      sum += notes[i];
    }
     average1 = sum / notes.length;
    
    return average1;
    
    
  }
  console.log(average());
  
 
  

  module.exports = average;
