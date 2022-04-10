// async function addPoke(data) {
  
//   const test = document.querySelector('.poke');
//   console.log('t', test);
//   console.log('2 ',pokemon);
//   return pokemon;
// }

async function fetchPoke() {
  const inPoke = document.querySelector('#inputPoke');
  const poke = inPoke.value;
  const url = `https://pokeapi.co/api/v2/pokemon/${poke}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    const pokemon = {
      nome: data.name,
      normal: data.sprites.front_default,
      shiny: data.sprites.front_shiny,
    };
    // console.log('1 data ',data);
    // const result = await addPoke(data);
    // console.log('3r ', result);
    return pokemon;
  } catch (error) {
    return error;
  }
}

function criaPoke(d1, d3, d4) {
  const divSup3 = d1;
  const divPoke = d3;
  const divShiny = d4;
  const imgPoke = document.createElement('img');
  const imgShiny = document.createElement('img');

  // const newPok = fetchPoke();
  // console.log('4 fet',newPok);
  // divSup3.innerHTML = newPok.nome; 
  // imgPoke.src = newPok.normal;
  // divPoke.innerHTML = "Normal version";
  // imgShiny.src = newPok.shiny;
  // divShiny.innerHTML = "Shyni version";
  // divPoke.appendChild(imgPoke);
  // divShiny.appendChild(imgShiny);
}

function criaDivs(div1, div2) {
  const divInf2 = div1;
  const divSup2 = div2;
  const divPoke = document.createElement('div');
  const divShiny =document.createElement('div');
  divPoke.className = 'poke';
  divShiny.className = 'shiny';
  divInf2.appendChild(divPoke);
  divInf2.appendChild(divShiny);
  console.log();
  criaPoke(divSup2, divPoke, divShiny)
}

function criaContainer() {
  const container = document.createElement('div');
  const divSup = document.createElement('div');
  const divInf = document.createElement('div');
  container.className = 'cont';
  divSup.className = 'sup';
  divInf.className = 'inf';
  container.appendChild(divSup);
  container.appendChild(divInf);
  criaDivs(divSup, divInf);
  return container;
}

function criaLista() {
  const containerPronto = criaContainer();
  const ul = document.querySelector('#listaPoke');
  const li = document.createElement('li');
  li.appendChild(containerPronto);
  ul.appendChild(li);
  const newPok = fetchPoke();
  console.log('fet ',newPok);
  console.log('li', li);
  return li;
}

const botao = () => {
  const button = document.querySelector('#buscarPoke');
  button.addEventListener('click', criaLista);
}

window.onload = () => botao();
