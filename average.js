function average() {
  var notes = [20, 12, 8, 9];
    var sum = 0;
   
  
    for (var i = 0; i < notes.length; i++) {
      sum += notes[i];
    }
     return sum / notes.length;
    
    
    
    
  }
  console.log(average());
  
 
  

  module.exports = average;
