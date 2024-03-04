/*  Pseudocode
1. Define the variables needed for this assignment.
2. Assign the variables with the necessary arithmetic operators.
3. Create the dialog box using the 'alert' method.
4. Add comments for explanations of code where necessary.
*/

// Declared the variables needed for this exercise; both numbers and strings.
const combo1 = 5 + 5;
const combo2 = 4 * 10;
const combo3 = 239 % 200;

const messageStr = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";
// Realized I needed dashes between the codes, so added another string.
const dashStr = " - ";
// Used 'alert' method for the dialog box pop-up.
alert(messageStr + combo1 + dashStr + combo2 + dashStr + combo3);

// Bonus method for the user to enter the secret combination is below.
// This method uses prompt methods along with an alert method in a function
// that is embedded in a submit input in the .html file.

function userInputPromptsSecretCode() {
  const userEnter1 = prompt("Please enter the first combination number: ")
  const userEnter2 = prompt("Please enter the second combination number: ")
  const userEnter3 = prompt("Please enter the third combination number: ")

alert(messageStr + userEnter1 + dashStr + userEnter2 + dashStr + userEnter3);
};

// Second bonus method below for the user to enter the secret combination.
// This is a better method than using the prompt method above, as the prompt method will 
// annoy the user with too many dialog box pop-ups.

function userEnterSecretCode() {
  alert(messageStr + secretCombo1.value + dashStr + secretCombo2.value + dashStr + secretCombo3.value);
}

// The below is the function I've written for the user to guess the entry code. If they guess correctly (10 - 40 - 30),
// then a dialog box pop-up will tell them they are correct; otherwise a dialog box pop-up will tell them they are incorrect.

function userGuessSecretCode() {
  if(secretCombo1Guess.value == 10) {
    if(secretCombo2Guess.value == 40) {
      if(secretCombo3Guess.value == 39) {
        alert("You have guessed correctly!")
      }
      else{
        alert("You have guessed incorrectly...")
      }
    }
    else{
      alert("You have guessed incorrectly...")
    }
  }
  else{
    alert("You have guessed incorrectly...")
  }
};