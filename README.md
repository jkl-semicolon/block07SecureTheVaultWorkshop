For this assignment, I have also included two ways for the user to enter in the secret code themselves.

The first way uses three prompt methods, so the user would enter in the three secret combo numbers in three separate dialog box pop-ups. After they enter them, an alert method is used to display the user entered secret combo. It is noted that this is commented out in the .js file, as to not clog up the webpage with too many dialog box popups.

The second way uses a form in the .html file, and three number inputs with a submit button. The submit button then has an embedded function named userEnterSecretCode(), which uses the alert method to create a dialog box pop-up showing the user entered secret combo.


In addition, there is another section and associated form where the user can try to guess the secret combination (10-40-39). The submit button then has an embedded function named userGuessSecretCode(), which uses the alert method to create a dialog box pop-up telling the user if they've guessed correctly or incorrectly.