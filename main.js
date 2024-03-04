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
101
// Used 'alert' method for the dialog box pop-up.
alert(messageStr + combo1 + dashStr + combo2 + dashStr + combo3);

// Bonus method for the user to enter the secret combination is below:
const userEnter1 = prompt("Please enter the first combination number: ");
const userEnter2 = prompt("Please enter the second combination number: ");
const userEnter3 = prompt("Please enter the third combination number: ");

alert(messageStr + userEnter1 + dashStr + userEnter2 + dashStr + userEnter3);