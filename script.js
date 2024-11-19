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

let myStoryOne = ` <p> A long long time ago a ${userName1} cast a dark spell on the kingdom of ${placeName1} . A dark cloud ${adjective1} into the kingdom. The ${userName1} wished to ${wish1} . The dark cloud helped them succeed. But a great knight wielding a ${weapon1} and a ${weapon2} . In order to defeat the ${userName1} the great knight had to travel to the ${biome1}, ${biome2}, and the ${biome3}. First the knight traveled to the ${biome1}, the darkness had already descended on the land but the knight ran in with his ${weapon1} and managed to get the magical artifact, the ${artifact1}. Next they traveled to the ${biome2}, this place was completely untouched with a large ${building} for defense. In order to get the ${artifact2} the knight had to ${verb1}. The final piece was a ${artifact3} in the ${biome3}. The ${artifact3} was guarded by a ${monster} the knight fought off the ${monster} with their ${weapon2}. After getting back to ${placeName1}. They found the ${userName1} had completely taken over the kingdom. Using the power of the artifacts the knight decided they must turn into a ${monster2} and seal away the ${userName1} bringing peace to ${placeName1}. </p>`

console.log(myStoryOne)

document.getElementById('storyone').innerHTML = myStoryOne


} else if (randomNumber == 2) {
  //do diff stuff
//ALL prompts this section: planetName, LSname, Adjective, Occupation, LSname, roomName, Adjective, Noun, NegativeAdjective, Onomatopoeia, LSname, Family, noun, Family, noun

 let myStoryTwo = `<p> On the distant planet of ___, A somewhat long time ago in a universe far from our own. A man by the name of ___ was just an _____ man. He was a ____, and was good at his job. One day ___ returns to his home to find an old man at his ____. The man was ____ he told a tale of an age long past. Of a wizard who could control and manipulate ____. The old man told of how the wizard grew ___ and that led to their downfall of turning to darkness. A ___ was heard in the distance the old man held out his hand and told ____ that wasn't a story. It was the tale of what happened to his ____. The old man explained that he was once their teacher but failed. The old man had ____ in his hand. He said this was once your ____’s. Now you must bring balance to the magic so will you take the ____? </p>`

 console.log(myStoryTwo)

 document.getElementById('storytwo').innerHTML = myStoryTwo

}
else if (randomNumber == 3) {
  // do more diff stuff
//ALL prompts this section: problem, productName, adjective, problem, productName, adverb, noun, productName, adjective, problem2, productName, phoneNumber, number, number2, number3

let myStoryThree = `Do you or someone you love ____. Well, do we have the solution for you. Introducing ____ the ___ new product designed to solve ____. Ever wonder how it works? Well here's your answer. The ___ works to remove your problem ____. If you worry this product will make ___ well not to worry the ___ is absolutely free allowing for a ___ environment for your pets and family. But wait there's more if you are also tired of ____ the ____ also takes care of that with no additional fee. To order yours today call _______ if you order in the next ____ hours you will receive a free instruction guide. That's quite the deal only after __ payments of _____ dollars. Order Now!`

console.log(myStoryThree)

document.getElementById('storythree').innerHTML = myStoryThree

}
else {
  // if nothing above is true, do this 
//ALL prompts this section: adjective, adjective, adjective, whatdidyouaskfor, clothes, verb, noun1, number, noise, adjective, noun, noun, noun1, who, adjective, date

let myStoryFour = `Your car breaks down on a ____ road. _____ your car stops directly in front of an old ____ mansion. You knock on the door to ask for _____. A man in a _____ opens the door and ____ at you before telling you to enter. You stay in the main lobby with a large ____ hangs from the ceiling cobwebs and dust everywhere. it would appear no one has been there in ____ years. Suddenly you hear ____ the windows ____ open and you hear voices and whispers. A ____ and a ____ fly past you with no one nearby. Suddenly the ____ crashes to the floor and a ____ enters ____ into the room. It was ____, your birthday.`

console.log(myStoryFour)

document.getElementById('storyfour').innerHTML = myStoryFour
  
}

