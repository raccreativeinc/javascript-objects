/*
  Create an array of 'pet' objects.
  Each object should have the following properties: 
  name, type, breed, age, and photo
*/
const pets = [
  {
    name: 'Aussie',
    type: 'dog',
    breed: 'Australian Shepherd',
    age: 4,
    photo: '/Users/raulacrespocarreno/Desktop/javascript-objects/2%20-%20Loop%20Through%20Objects/4%20-%20Build%20an%20Object%20Challenge/start/img/aussie.jpg'
  },
  {
    name: 'Docker',
    type: 'dog',
    breed: 'Dachshund',
    age: 1,
    photo: '/Users/raulacrespocarreno/Desktop/javascript-objects/2%20-%20Loop%20Through%20Objects/4%20-%20Build%20an%20Object%20Challenge/start/img/dachshund.jpg'
  },
  {
    name: 'Goldy',
    type: 'dog',
    breed: 'Golden Retriever',
    age: 10,
    photo: '/Users/raulacrespocarreno/Desktop/javascript-objects/2%20-%20Loop%20Through%20Objects/4%20-%20Build%20an%20Object%20Challenge/start/img/golden.jpg'
  },
  {
    name: 'Percy',
    type: 'cat',
    breed: 'persian',
    age: 3,
    photo: '/Users/raulacrespocarreno/Desktop/javascript-objects/2%20-%20Loop%20Through%20Objects/4%20-%20Build%20an%20Object%20Challenge/start/img/persian.jpg'
  },
  {
    name: 'Puggy',
    type: 'dog',
    breed: 'pug',
    age: 8,
    photo: '/Users/raulacrespocarreno/Desktop/javascript-objects/2%20-%20Loop%20Through%20Objects/4%20-%20Build%20an%20Object%20Challenge/start/img/pug.jpg'
  },
  {
    name: 'Kitty',
    type: 'cat',
    breed: 'tabby',
    age: 5,
    photo: '/Users/raulacrespocarreno/Desktop/javascript-objects/2%20-%20Loop%20Through%20Objects/4%20-%20Build%20an%20Object%20Challenge/start/img/tabby.jpg'
  }
];

let html = ``;
for ( let i = 0; i < pets.length; i++) {
    html += `
      <h2>${pets[i].name}</h2>
      <h3>${pets[i].type} | ${pets[i].breed}</h3>
      <p>Age: ${pets[i].age}</p>
      <img src="${pets[i].photo}" alt="${pets[i].breed}">
    `;
  }

document.querySelector('main').insertAdjacentHTML('beforeend', html);