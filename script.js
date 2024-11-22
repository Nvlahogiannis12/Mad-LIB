/*
let userName = prompt('Who might you be?')
let userQuest = prompt('What is your quest?')
let userFavoriteColor = prompt('What is your favorite color')
let swallowAirSpeed = prompt('What is the speed of unlaiden swallow?')


let myStory = ` <p> Hello ${userName}. Answer me these questions <span class="loud"> three</span>, and the other side you'll see. </p>

<p> I see you have already answered so your quest is to ${userQuest}.
</p>
`
*/

// Random Number Generator ("random mad-lib")
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomNumber(1, 4);
console.log(randomNumber);

// if then statements ... "==" is the REAL way to say equal ..."

if (randomNumber == 1) {
  //do stuff
//ALL prompts this section: Name, PlaceName, Adjective, NameS, Wish, Weapon1, Weapon2, NameS, biome1, biome2, biome3, biome1, weapon1, artifact1, biome2, building, artifact2, verb, artifact3, biome3, artifact3, monster, monster1, weapon2, PlaceName, NameS, Animal/Monster, NameS, PlaceName.

let userName1 = prompt('Name a Noun')
let placeName1 = prompt('Name a Place') 
let adjective1 = prompt('Name an adjective')
let wish1 = prompt('Name a goal or wish')
let weapon1 = prompt('Name a weapon')
let weapon2 = prompt('Name another weapon')
let biome1 = prompt('Name a biome (ex: forest, ocean, etc.)')
let biome2 = prompt('Name another biome')
let biome3 = prompt('Name another biome')
let artifact1 = prompt('Name a noun')
let building = prompt('Name a building or type of building')
let artifact2 = prompt('Name a noun')
let verb1 = prompt('Name a verb')
let artifact3 = prompt('Name a noun')
let monster = prompt('Name a mythical monster')
let monster2 = prompt('Name a animal or monster')

let myStoryOne = `<h2>The Legend</h2>

<p> A long long time ago a ${userName1} cast a dark spell on the kingdom of ${placeName1} . A dark cloud ${adjective1} into the kingdom. The ${userName1} wished to ${wish1} . The dark cloud helped them succeed. But a great knight wielding a ${weapon1} and a ${weapon2} . In order to defeat the ${userName1} the great knight had to travel to the ${biome1}, ${biome2}, and the ${biome3}. First the knight traveled to the ${biome1}, the darkness had already descended on the land but the knight ran in with his ${weapon1} and managed to get the magical artifact, the ${artifact1}. Next they traveled to the ${biome2}, this place was completely untouched with a large ${building} for defense. In order to get the ${artifact2} the knight had to ${verb1}. The final piece was a ${artifact3} in the ${biome3}. The ${artifact3} was guarded by a ${monster} the knight fought off the ${monster} with their ${weapon2}. After getting back to ${placeName1}. They found the ${userName1} had completely taken over the kingdom. Using the power of the artifacts the knight decided they must turn into a ${monster2} and seal away the ${userName1} bringing peace to ${placeName1}. </p>`

console.log(myStoryOne)

document.getElementById('storyone').innerHTML = myStoryOne


} else if (randomNumber == 2) {
  //do diff stuff
//ALL prompts this section: planetName, LSname, Adjective, Occupation, LSname, roomName, Adjective, Noun, NegativeAdjective, Onomatopoeia, LSname, Family, noun, Family, noun

let planetName = prompt('Name a Planet')
let userName2 = prompt('Name a Name')
let adjective2 = prompt('Name a Adjective')
let occupation1 = prompt('Name an Occupation')
let room = prompt('Name a Room')
let adjective3 = prompt('Name an Adjective')
let noun2 = prompt('Name a Noun')
let adjective4 = prompt('Name a negative Adjective')
let onomatopoeia = prompt('Name an Onomatopoeia')
let family = prompt('Name a family member (aunt, cousin, etc.)')
let noun3 = prompt('Name a noun')

 let myStoryTwo = `<h2>A long long time ago...</h2>
 
 <p> On the distant planet of ${planetName}, A somewhat long time ago in a universe far from our own. A man by the name of ${userName2} was just an ${adjective2} man. He was a ${occupation1}, and was good at his job. One day ${userName2} returns to his home to find an old man at his ${room}. The man was ${adjective3} he told a tale of an age long past. Of a wizard who could control and manipulate ${noun2}. The old man told of how the wizard grew ${adjective4} and that led to their downfall of turning to darkness. A ${onomatopoeia} was heard in the distance the old man held out his hand and told ${userName2} that wasn't a story. It was the tale of what happened to his ${family}. The old man explained that he was once their teacher but failed. The old man had ${noun3} in his hand. He said this was once your ${family}’s. Now you must bring balance to the magic so will you take the ${noun3}? </p>`

 console.log(myStoryTwo)

 document.getElementById('storytwo').innerHTML = myStoryTwo

}
else if (randomNumber == 3) {
  // do more diff stuff
//ALL prompts this section: problem, productName, adjective, problem, productName, adverb, noun, productName, adjective, problem2, productName, phoneNumber, number, number2, number3

let problem = prompt('Name a problem')
let productName = prompt('Name a Product')
let adjective5 = prompt('Name an Adjective')
let adverb = prompt('Name an adverb')
let noun4 = prompt('Name a Noun')
let adjective6 = prompt('Name an Adjective')
let problem2 = prompt('Name another Problem')
let phoneNumber = prompt('Make a Phone Number')
let number1 = prompt('Name a Number')
let number2 = prompt('Name a Number')
let number3 = prompt('Name a Number')

let myStoryThree = `<h2>Advertisment</h2>

<p>Do you or someone you love ${problem}. Well, do we have the solution for you. Introducing ${productName} the ${adjective5} new product designed to solve ${problem}. Ever wonder how it works? Well here's your answer. The ${productName} works to remove your problem ${adverb}. If you worry this product will make ${noun4} well not to worry the ${productName} is absolutely free allowing for a ${adjective6} environment for your pets and family. But wait there's more if you are also tired of ${problem2} the ${productName} also takes care of that with no additional fee. To order yours today call ${phoneNumber} if you order in the next ${number1} hours you will receive a free instruction guide. That's quite the deal only after ${number2} payments of ${number3} dollars. Order Now! </p>`

console.log(myStoryThree)

document.getElementById('storythree').innerHTML = myStoryThree

}
else {
  // if nothing above is true, do this 
//ALL prompts this section: adjective, adjective, adjective, whatdidyouaskfor, clothes, verb, noun1, number, noise, adjective, noun, noun, noun1, who, adjective, date

let adjective7 = prompt('Name an Adjective')
let adverb1 = prompt('Name an Adverb')
let adjective8 = prompt('Name an Adjective')
let noun5 = prompt('Name a Noun')
let clothes = prompt('Name an outfit (Bathing suit, Suit, etc.)')
let verb2 = prompt('Name a Verb')
let noun6 = prompt('Name a Noun')
let number4 = prompt('Name a Number')
let onomatopoeia1 = prompt('Name an Onomatopoeia')
let verb3 = prompt('Name a Verb')
let noun7 = prompt('Name a Noun')
let noun8 = prompt('Name a Noun')
let monster3 = prompt('Name a Monster')
let adverb2 = prompt('Name an adverb')
let date = prompt('Whats todays date')

let myStoryFour = `<h2>Spooky Manor</h2>

<p>Your car breaks down on a ${adjective7} road. ${adverb1} your car stops directly in front of an old ${adjective8} mansion. You knock on the door to ask for ${noun5}. A man in a ${clothes} opens the door and ${verb2} at you before telling you to enter. You stay in the main lobby with a large ${noun6} hangs from the ceiling cobwebs and dust everywhere. it would appear no one has been there in ${number4} years. Suddenly you hear ${onomatopoeia1} the windows ${verb3} open and you hear voices and whispers. A ${noun7} and a ${noun8} fly past you with no one nearby. Suddenly the ${noun5} crashes to the floor and a ${monster3} enters ${adverb2} into the room. It was ${date}, your birthday.</p>`

console.log(myStoryFour)

document.getElementById('storyfour').innerHTML = myStoryFour
  
}

