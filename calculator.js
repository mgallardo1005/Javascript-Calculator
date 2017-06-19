//we set our onclick functions inside of each of our buttons. we just have to run those functions when those buttons are clicked

var display = document.getElementById('display'); //when we set display equal to something, that populates the display

function toScreen(pressed) { //this function is what the buttons are tied to. 
  display.value += pressed; //this makes the display show the button that we pressed. So, pressing any button that is tied to this function will make the display show that character. the += adds multiple numbers to the screen
  if (pressed === 'allClear') { //if 'C' is pressed
    display.value = ''; //the display turns into an empty string
  }  
}

function answer(){ //this function is set up to be called when the = is pressed. It is set up in our HTML
  var x = display.value; //take everything in our display
  var y = eval(x); //and evaluate the mathematical expression
  display.value = y; //display the answer in the display
}

function backspace(){ //this function is set up to be called when the 'CE' is pressed. It is set up in our HTML
  var x = display.value; //this is what is currently displayed
  var len = x.length-1; //the length of what is displeyed, minus 1
  var newX = x.substring(0, len); //this returns a substring starting at the 0 index, and ending at the length-1 position
  display.value = newX; //display the new substring
}