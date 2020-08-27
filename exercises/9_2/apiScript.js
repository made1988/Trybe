const API_URL = 'https://icanhazdadjoke.com/';

const jokeParagraph = document.createElement('p');

const appendJoke = joke => document.querySelector('#jokeContainer').appendChild(jokeParagraph).innerText = joke;

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => data.joke)
    .then(joke => appendJoke(joke));
};


window.onload = () => fetchJoke();
