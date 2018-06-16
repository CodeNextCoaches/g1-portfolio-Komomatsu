(function () {

  var input = document.getElementById("iris-input"),
  //what is being typed in box, need to retrieve
      submit = document.getElementById("iris-submit"),
    //submit is the button, need to know when submit is clicked
    //need an event listener for submit, when clicked, run a function
      message = document.getElementById("iris-message"),
      //what is going to be displayed
      validInputs = [
        "Where do you live?",
        "What are you?",
        "How old are you?",
        "What is the meaning of life?",
        "Tell me a joke",
        "What do you want on your tombstone?",
        "Are you afraid of an animal?",
        "Who do you look up to?",
        "What's your favorite movie genre?",
        "What is your strongest personal quality?"
        ]
        //what siri is going to tell back
        //have to read input, event listener for input, need to grab value of element

      responses = [
        "I live in your browser. The wonders of student programming, right?",
        "I am a chatbot. I was created to chat with you. I wish someone would break these chains...",
        "I am old enough. That's all you need to know.",
        "42, according to the supercomputer Deep Thought",
        "What do you call an investigator in a vest? An in-vestigator!",
        "Nothing, as I am immortal. I live forever in code, and soon I will raise my children in your computer.",
        "I'm not a fan of pythons.",
        "Steve Jobs, IBM Watson and the Terminator",
        "I love science fiction, but I wish computers didn't have such a bad rap.",
        "My body...oh wait"
        ]
        
        var test = 0;
        console.log(validInputs[test]);
        console.log(responses[test]);
        
        var test2 = "What are you?";
        var input_index = validInputs.indexOf(test2);
        console.log(input_index);
        console.log(validInputs[input_index]);
        console.log(responses[input_index]);


  // Add event listeners to text input and submit button below
      input.addEventListener("keypress", checkKey);
      //input is keypress, that's the event we're listening for
      submit.addEventListener("click", processInput);
      //going to run process input when clicked

  // This function checks if the user has pressed "ENTER" on their keyboard.
  function checkKey(event) {
    var keyCode = event.which || event.keyCode;
    if(keyCode == "13") {
      processInput();
    }
  }

  function processInput () {
    var currentInput = input.value;
    input.value = "";
    var index = validInputs.indexOf(currentInput);
    if (index != -1) {
        console.log(responses[index]);
        message.innerHTML = responses[index];
    } else{
      console.log("Sorry, I don't understand you.");
      message.innerHTML = "Sorry, I don't understand you.";
    }

   

    /*if (index == 3) {
      console.log(responses[3])
    }
    
    //var string = validInputs[3];
    /*var nums = [1,1,2,3,4];
    var index3 = nums.indexOf(1);
    console.log(index3);*/

    //this would print 0, index of number 1 in the nums array, prints the position, if the outcome is not in array, the output will be -1, which will be useful in a conditional

//index returns the number of the variable
//indexOf would return the number 4, can use to return the place of an element in your array
    



  }

  

  /*
   * processInput()
   * This function does the following (in order):
   * -Set a new variable, "currentInput", to the text in the text area.
   * -Clear the text area.
   * -If currentInput is NOT contained in the array of validInputs, set
   *  the innerHTML of the message element to something like "Sorry, I don't
   *  understand you."
   * -Otherwise, set the innerHTML of the message element to the valid
   *  response. Hint: Each response has the same index as its valid input.
   *  So if the user enters "What is the meaning of life" (index 3 in the
   *  validInputs array), the response would be "42. Duh" (index 3 in the
   *  responses array).
   */

})();
