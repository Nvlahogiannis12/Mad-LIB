let userName = prompt('Who might you be?')
let userQuest = prompt('What is your quest?')
let userFavoriteColor = prompt('What is your favorite color')
let swallowAirSpeed = prompt('What is the speed of unlaiden swallow?')


let myStory = ` <p> Hello ${userName}. Answer me these questions <span class="loud"> three</span>, and the other side you'll see. </p>

<p> I see you have already answered so your quest is to ${userQuest}.
</p>
`

console.log(myStory)

document.getElementById('story').innerHTML = myStory

// Random Number Generator ("random mad-lib")
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Example usage:
let randomNumber = getRandomNumber(1, 4);
console.log(randomNumber);

// if then statements ... "== is the REAL way to say equal ..."

if (randomNumber == 1) {
  //do stuff
} else if (randomNumber == 2) {
  //do diff stuff
}

else if (randomNumber == 3) {
  // do more diff stuff
}
else {
  // if nothing above is true, do this 
}

