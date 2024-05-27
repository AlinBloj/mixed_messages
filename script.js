// Lists of variables
const variable1 = ["Hello", "Hi", "Hey", "Yo Ho", "Greetings"];
const variable2 = ["world", "everyone", "folks", "friends"];
const variable3 = ["!", ".", "...", "😅", "😎"];

// Function to generate a random message composed of 2 or 3 variables
function generateRandomMessage() {
  // Random variables
  const randomVar1 = variable1[Math.floor(Math.random() * variable1.length)];
  const randomVar2 = variable2[Math.floor(Math.random() * variable2.length)];
  const randomVar3 = variable3[Math.floor(Math.random() * variable3.length)];

  // Construct the message
  let message = randomVar1 + " " + randomVar2;

  // Add the third variable if applicable
  if (Math.random() > 0.5) {
    message += " " + randomVar3;
  }

  // Return the final message
  return message;
}

// Display a random message in the console
console.log(generateRandomMessage());
// Hope that's true....
console.log("It's never too late to become a programmer!");
