/** @format */

// fetch JavaScript objects representing specific elements in the DOM
let userInput2 = document.querySelector('#userInput2');

// add an event listener on the target element
userInput2.addEventListener('input', handleInput);

const getTasty = (param) => {
  let tastyData = [];
  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/auto-complete',
    params: { prefix: param },
    headers: {
      'X-RapidAPI-Key': 'd7f9e717b8mshfb7ea772dbb24dep1c16c5jsnb59b9478cd9e',
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      element.textContent = JSON.stringify(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

let element = document.createElement('div');
element.setAttribute('class', 'output');
document.querySelector('#inputEventExample').append(element);

// callback function to handle event
function handleInput(event) {
  console.log('click event', event);
  getTasty(userInput2.value);
  element.textContent = userInput2.value;
}
