/**
 * Exercise 02 - Reverse *
 *
 * @format
 */

// Add your code here
let main = document.querySelector('main');
let input = document.querySelector('#input');
input.addEventListener('input', handleInput);

// Create output element
let output = document.createElement('div');
output.setAttribute('class', 'output');
main.append(output);

function getTasty(param) {
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
    .then(function (response) {
      let results = [];
      results = response.data.results;
      console.log(response.data.results);
      results.forEach((item) => {
        let result = document.createElement('div');
        result.setAttribute('class', 'result');
        output.append(result);
        console.log(item);
        result.textContent = `Result: ${item.display}`;
      });
    })
    .catch(function (error) {
      console.error(error);
    });
}

// callback function to handle event
function handleInput(event) {
  console.log('click event', event);
  getTasty(input.value);
  output.textContent = `Searching: ${input.value}`;
}
