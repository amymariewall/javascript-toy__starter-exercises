//7B: More Counting.

//Prompt the user for a start value and an end value. Count from the start value to the end value using a `while` loop. Make sure to account for the start-value being equal to or greater than the end-value (should it not count? Should it count down instead of up in such cases?).

//Extend this by asking the user what increment they want to count by.

  var i = parseInt(prompt("Please enter a start-value."));
  var y = parseInt(prompt("Please enter an end-value."));
  var z = parseInt(prompt("Please enter an increment."));

  var ipos = Math.abs(i);
  var ypos = Math.abs(y);
  var zpos = Math.abs(z);
  var subtract = (ipos - ypos);
  var difference = Math.abs(subtract);

  if ((i != NaN) && (y != NaN) && (z != NaN) && (zpos <= difference)){
  
  if (i < y) {

    while (i <= y) {


      alert("The number is " + i);
      (i+=Math.abs(z));
    }
  }

  else if (i > y) {

    while (i >= y){
    
    alert("The number is " + i)
    (i-=Math.abs(z));
    }
  }

  else if (i === y) {
    alert("Those numbers are the same!")
  }

  else {

    alert("Invalid number entry.")
    };
  }
