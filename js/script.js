const button = document.querySelector('#click-me');
const h1 = document.querySelector('h1');
const anchors = document.querySelectorAll('.attribution a');

// randomColor will hold the value of the random generated color
let randomColor = '';
// compColor will hold the complementary color of the randomColor
let compColor = '';
// rgbArray will hold the rgb values for the randomColor
let rgbArray = [];
// randomValue generates a number from 1-256
const randomValue = () => Math.floor(Math.random() * 256);

/**
 * [generates a random color and stores the red, green, and blue values into an array]
 * 
 * @param {number} value - A random number value from 1-256
 * @returns {string} The rgb string
 */

function randomRGB(value) {
    rgbArray = [];

    rgbArray.push(value());
    rgbArray.push(value());
    rgbArray.push(value());
    console.log(rgbArray);

    const color = `rgb( ${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]} )`;
    return color;
  }

button.addEventListener('click', e => {
    const container = document.querySelector('.container');
    const learningSpan = document.querySelector('#learning');

    // stores the random color that will be generated
    randomColor = randomRGB(randomValue);

    container.style.background = `${randomColor}`;
    learningSpan.style.background = `${randomColor}`;

    // let rgb values equal the values stored in the rgbArray (which are the values for the current random color)
    // then set compColor value to 255 minus rgb value (which gives you the complementary color)
    let red = rgbArray[0];
    let green = rgbArray[1];
    let blue = rgbArray[2];
    compColor = `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;

    // set anchor tags to compColor
    anchors.forEach(a => {
        a.style.color = `${compColor}`;
    })

    console.log(compColor);
    console.log(randomColor);

})

// button.addEventListener('mouseover', () => button.style.color = `${compColor}`);
// button.addEventListener('mouseout', () => button.style.color = '#000');
button.addEventListener('mouseover', () => {
    button.style.color = `${randomColor}`;
    button.style.background = `${compColor}`;
})
button.addEventListener('mouseout', () => {
    button.style.color = '#000';
    button.style.background = '#fff';
})

h1.addEventListener('mouseover', () => h1.style.color = `${randomColor}`);
h1.addEventListener('mouseout', () => h1.style.color = 'var(--grey-950)');



anchors.forEach( (a) => {

    a.addEventListener('mouseover', () => a.style.color = `${randomColor}`);
    a.addEventListener('mouseout', () => a.style.color = `${compColor}`);

})

// save to local storage