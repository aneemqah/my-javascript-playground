// Make a div
const div = document.createElement('div');
// Add a class of wraper to the div
div.classList.add('wrapper');
// Place this in the body
document.body.appendChild(div);

// Make an unordered
// Add three list items with the words "one, two, three" in them
const ul = `<ul>
<li>One</li>
<li>Two</li>
<li>Three</li>
</ul>`;

// Put the list into the above wrapper
div.innerHTML = ul;

// create an image
const img = document.createElement('img');
// set the source to an image
img.src = 'https://picsum.photos/500';
// set the width to 250
img.width = 250;
img.height = 250;
// add a class of clock
img.classList.add('clock');
// add an alt of Cute Puppy
img.alt = 'i am a clock';
// Append that image to the wrapper
div.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it

const myParagraphs = `<div class="para">
                        <p>I am paragraph one</p>    
                        <p>I am paragraph two</p>   
                    </div>`;

const myUl = document.querySelector('ul');
// put this div before the unordered list from above
myUl.insertAdjacentHTML('beforebegin', myParagraphs);
// add a class to the second paragraph called warning
const myPara = document.querySelector('.para');
myPara.children[1].classList.add('warning');
// remove the first paragraph
myPara.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

function generatePlayerCard(name, age, height) {
  const html = `
    <div class="playerCard">
      <h2>${name} — ${age}</h2>
      <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${
    age * 7
  }. That would be a tall dog!
        <button class="delete" type="button">&times; Delete</button>
    </p>

    </div>
  `;
  return html;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
let cardsHTML = generatePlayerCard('joe', 12, 150);
cardsHTML += generatePlayerCard('bloggs', 14, 150);
cardsHTML += generatePlayerCard('blah', 16, 150);
cardsHTML += generatePlayerCard('meh', 18, 150);

// append those cards to the div

cards.innerHTML = cardsHTML;
div.insertAdjacentElement('beforebegin', cards);
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener('click', deleteCard));
