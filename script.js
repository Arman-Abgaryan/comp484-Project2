$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.spin-button').click(clickedSpinButton);
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name: "Lucky", weight: 80, happiness: 50};

    let messageTimeout = null;
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 3; // When treat button is pressed, happiness is increased by 3
      pet_info.weight += 2; // When treat button is pressed, weight is increased by 2

      clearTimeout(messageTimeout); // Ensures timers for buttons do not overlap

      // Prints message "Yummy"
      // Uses jQuery slideDown() and slideUp() to show a message when the button is clicked and then hide it again after a short delay.
      $("#petMessage").text("Yummy!").slideDown();
      setTimeout(() => $("#petMessage").slideUp(), 2500);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 4; // When play button is pressed, happiness is increased by 4
      pet_info.weight -= 2; // When treat button is pressed, happiness is decreased by 2

      clearTimeout(messageTimeout); // Ensures timers for buttons do not overlap

      // Prints message "I love to play"
      // Uses jQuery slideDown() and slideUp() to show a message when the button is clicked and then hide it again after a short delay.
      $("#petMessage").text("I love to play!").slideDown();
      setTimeout(() => $("#petMessage").slideUp(), 2500);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -= 5;
      pet_info.weight -= 5;

      clearTimeout(messageTimeout); // Ensures timers for buttons do not overlap

      // Prints message "Please, I don't want to exercise!"
      // Uses jQuery slideDown() and slideUp() to show a message when the button is clicked and then hide it again after a short delay.
      $("#petMessage").text("Please, I don't want to exercise!").slideDown();
      setTimeout(() => $("#petMessage").slideUp(), 2500);

      checkAndUpdatePetInfoInHtml();
    }

    function clickedSpinButton() {
      pet_info.happiness += 3;
      pet_info.weight -= 1;

      // Restart spin animation
      const pet = document.querySelector(".pet-image");
      pet.classList.remove("spin-animation");
      void pet.offsetWidth;
      pet.classList.add("spin-animation"); // Start spin animation

      clearTimeout(messageTimeout); // Ensures timers for buttons do not overlap

      // Prints message that "Lucky is spinning"
      // Uses jQuery slideDown() and slideUp() to show a message when the button is clicked and then hide it again after a short delay.
      $("#petMessage").text("Lucky is spinning!").slideDown();

      setTimeout(() => { $("#petMessage").slideUp(); }, 2500);

      checkAndUpdatePetInfoInHtml();
    }

    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info.weight < 0) {
         pet_info.weight = 0;
      } 
      if (pet_info.happiness < 0) {
        pet_info.happiness = 0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  