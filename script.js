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
  
    function clickedTreatButton() {
      // Increase pet happiness
      // Increase pet weight
      pet_info.happiness += 3; // When treat button is pressed, happiness is increased by 10
      pet_info.weight += 2; // When treat button is pressed, weight is increased by 5

      $("#petMessage").text("Yummy!").slideDown();
      setTimeout(() => $("#petMessage").slideUp(), 2500);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      // Decrease pet weight
      pet_info.happiness += 4;
      pet_info.weight -= 2;

      $("#petMessage").text("I love to play!").slideDown();
      setTimeout(() => $("#petMessage").slideUp(), 2500);
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      // Decrease pet weight
      pet_info.happiness -= 5;
      pet_info.weight -= 5;

      $("#petMessage").text("Please, I don't want to exercise!").slideDown();
      setTimeout(() => $("#petMessage").slideUp(), 2500);

      checkAndUpdatePetInfoInHtml();
    }

    function clickedSpinButton() {
      pet_info.happiness += 3;
      pet_info.weight -= 1;

      $(".pet-image").addClass("spin-animation");

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
  