//Arrays to store characters and quotes
const characters = ['Captain Jack Sparrow.', 'Sherlock Holmes', 'Captain Kirk', 'Malcolm Reynolds', 'Ace Rimmer', 'Friedrich W. Nietzsche'];
const line1 = ['This is the day you will always remember as the day', 'When you have eliminated all which is impossible, then whatever remains', 'To boldly go', 'Next time you want to stab me in the back', 'Smoke me a kipper', 'Beware that, when fighting monsters, you yourself do not become a monster'];
const line2 = ['you almost caught, Captain Jack Sparrow.', 'however improbable, must be the truth.', 'where no man has gone before.', 'have the guts to do it to my face.', 'I\'ll be back for breakfeast', 'for when you gaze long into the abyss, the abyss gazes also into you.'];

//Function to generate a random number from an array
const randomElement = (arr) => {
    let el  =  Math.floor(Math.random() * arr.length);
    return el;
}
//Function to create and format a random, mixed quote
const quote = () => {
    let charEl = randomElement(characters);
    let part1El = randomElement(line1);
    let part2El = randomElement(line2);

    while (charEl === part1El || charEl === part2El) {
        charEl = randomElement(characters);
        part1El = randomElement(line1);
        part2El = randomElement(line2);
    }
    return `${line1[part1El]},\n ${line2[part2El]} \n    -${characters[charEl]}`
}

//Code to display code on a webpage
const quoteButton = document.getElementById('quote');
const quoteDisplay = document.getElementById('quote-display')
quoteButton.addEventListener('click', () => {
    quoteDisplay.innerText = quote();
})