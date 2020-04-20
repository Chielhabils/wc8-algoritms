let numbers = [];
let random = null;
const length = 100;

/*
Werk de functies stupidSearch en binarySearch uit.
Tel in de functie het aantal stappen (= loop iteraties) dat nodig was om het getal te vinden.
Laat de functie return het aantal stappen returnen.
*/

const stupidSearch = (array, value) => {
  return 0;
}

const binarySearch = (array, value) => {
  return 1;
}

const onClickStupidSearch = () => {
  console.log('stupid search clicked');
  let time = 100;
  const steps = stupidSearch(numbers, random);
  updateHtml('stupid-search', random, steps, time);
}

const onClickBinarySearch = () => {
  console.log('binary search clicked');
  let time = 100;
  const steps = binarySearch(numbers, random);
  updateHtml('binary-search', random, steps, time);
}

const updateHtml = (id, result, steps, time) => {
  console.log('update')
  const container = document.getElementById(id);
  container.getElementsByClassName('guess')[0].innerHTML = random;
  container.getElementsByClassName('statistics')[0].innerHTML = `<h2>Steps: ${steps}</h2><h2>Time: ${time}ms</h2>`;
}

const init = () => {
  //fill array
  for(let i = 0; i < length; i++) {
    numbers[i] = i;
  }

  //create random
  random = Math.floor(Math.random()*length);
  document.getElementById('random').innerHTML = random;

  //init click
  document.getElementById('click-stupid-search').addEventListener('click', onClickStupidSearch)
  document.getElementById('click-binary-search').addEventListener('click', onClickBinarySearch);
}

init();