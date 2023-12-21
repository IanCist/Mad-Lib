let adjective = prompt('Enter an adjective:');
let noun = prompt('Enter a noun:');
let verb = prompt('Enter a verb:');
let adverb = prompt('Enter an adverb:');
let animal = prompt('Enter an animal:');
let place = prompt('Enter a place:');

let story = `Once upon a time, in a ${adjective} ${noun}, a ${verb} ${noun} ${adverb} ${verb}. 
They were joined by a ${adjective} ${animal} who loved to ${verb} in ${place}.`;

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`;