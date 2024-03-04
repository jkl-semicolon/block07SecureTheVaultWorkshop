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