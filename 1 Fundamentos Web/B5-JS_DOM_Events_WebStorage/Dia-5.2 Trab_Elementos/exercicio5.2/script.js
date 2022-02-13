
let bodyEx = document.querySelector('body');
let h1Ex = document.createElement('h1');
h1Ex.innerText = 'Exercício 5.2 - JavaScript DOM';
bodyEx.appendChild(h1Ex);

let mainEx = document.createElement('main');
mainEx.className = 'main-content';
bodyEx.appendChild(mainEx);

let sec_C = document.createElement('section');
sec_C.className = 'center-content';
mainEx.appendChild(sec_C);

let p_Sec_C = document.createElement('p');
p_Sec_C.innerText = 'Texto do paragrafo central';
sec_C.appendChild(p_Sec_C);

let sec_L = document.createElement('section');
sec_L.className = 'left-content';
mainEx.appendChild(sec_L);

let sec_R = document.createElement('section');
sec_R.className = 'right-content';
mainEx.appendChild(sec_R);

let imgSL = document.createElement('img');
imgSL.src='https://picsum.photos/200';
imgSL.className = 'small-image';
sec_L.appendChild(imgSL);

let ulSecRig = document.createElement('ul');

let lista = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for (let i = 0; i < lista.length; i += 1) {
    let item = lista[i];
    let newItemLista = document.createElement('li');
    newItemLista.innerText = item;
    newItemLista.innerHTML = newItemLista.innerHTML.toUpperCase();
    ulSecRig.appendChild(newItemLista);
}
sec_R.appendChild(ulSecRig);

//let h3Nomes = ['h3n1', 'h3n2', 'h3n3'];
for (let i = 0; i < 3; i += 1) {
    //let nomeh3 = h3Nomes[i];
    let newh3 = document.createElement('h3');
    mainEx.appendChild(newh3);
}


