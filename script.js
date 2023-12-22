let adjective = prompt('Enter an adjective:');
let noun = prompt('Enter a noun:');
let verb = prompt('Enter a verb:');
let adverb = prompt('Enter an adverb:');
let animal = prompt('Enter an animal:');
let place = prompt('Enter a place:');
let famousPerson = prompt('Enter the name of a famous person:');
let number = prompt('Enter a number:');
let emotion = prompt('Enter an emotion:');

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}. 
    They were joined by a ${adjective} ${animal} who loved to ${verb} in ${place}. 
    The group encountered ${number} ${adjective} ${noun}s led by the famous ${famousPerson}. 
    The atmosphere was filled with ${emotion} as they all ${verb} together in ${place}.`;

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p style="font-size: 18px; line-height: 1.6;">${story}</p>`;