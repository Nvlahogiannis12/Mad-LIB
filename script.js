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