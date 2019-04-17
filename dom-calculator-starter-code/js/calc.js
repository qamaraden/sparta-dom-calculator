document.addEventListener("DOMContentLoaded", function() {




  //get the form


  var display = document.getElementById("screen");
    var displayText = display.innerHTML;
    var numberButtons = document.getElementsByClassName("buttonNum");
    // Loop through number buttons and add a click event listener to all of them
    for (var i = 0; i < numberButtons.length; i++) {
      numberButtons[i].addEventListener("click", function(){
        if (firstNumber == "") {
          display.innerHTML = this.innerHTML;
          firstNumber = this.innerHTML;
        } else if(firstNumber != "" && secondNumber == "" && operator != "") {
          display.innerHTML = this.innerHTML;
          secondNumber = this.innerHTML;
        }
      });
    }



    var operatorButtons = document.getElementsByClassName("operator");

    for (var i = 0; i < operatorButtons.length; i++) {
      operatorButtons[i].addEventListener("click", function(){
        if (firstNumber != "" && secondNumber == "") {
          operator = this.innerHTML;
        }
      });
    }

    var equalsButton = document.getElementsByClassName("equals")[0];

    equalsButton.addEventListener("click", function(){
      display.innerHTML = eval(firstNumber + operator + secondNumber);
      clearData();
    });
  // So that I can see the result of my calculation
  function clearData() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
  }
  // As a user
  // I want to be able to press the AC button
    // Grab the AC button using the class buttonClear
    var acButton = document.getElementsByClassName("buttonClear")[0];
    // Add a click event listener to the AC button
    acButton.addEventListener("click", function(){
      clearData();
      display.innerHTML = displayText;
    });







})


//log this
//add the string oof the button
//sum = ""
//sum += this.innerHTML
//display.this.innerHTML
