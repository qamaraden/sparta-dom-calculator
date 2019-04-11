document.addEventListener("DOMContentLoaded", function() {

  var buttons = document.getElementsByClassName('buttonNum')
    // the code that will run when the event occurs
  /*  console.log("Button was clicked");
  });
*/
buttons.addEventListener("click", handleClick);

function handleClick(){
    console.log("Button was clicked");
  }
  //get the form


  var buttons = document.querySelectorAll("buttonNum")
  for (var i = 0; i < buttons.length; ){
    var buttons = buttons[i];

    buttons.addEventListener("click", function(){
      console.log(this.value + "was clicked"); // this always refers to the button that was clicked
    })
  }




})


//log this
//add the string oof the button
//sum = ""
//sum += this.innerHTML
//display.this.innerHTML
