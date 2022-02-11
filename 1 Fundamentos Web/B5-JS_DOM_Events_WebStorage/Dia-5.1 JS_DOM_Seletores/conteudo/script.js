let topo = document.getElementsByTagName('h1')[0];
topo.style.backgroundColor = 'green';

let emerg = document.getElementsByClassName('emergency-tasks')[0];
emerg.style.backgroundColor = 'orange';

let noEmerg = document.getElementsByClassName('no-emergency-tasks')[0];
noEmerg.style.backgroundColor = 'yellow';

let h3Urg = document.querySelectorAll('.emergency-tasks h3');
for (let i = 0; i < h3Urg.length; i++) {
    h3Urg[i].style.backgroundColor = 'purple';
}

let h3NoUrg = document.querySelectorAll('.no-emergency-tasks h3');
for (let i = 0; i < h3NoUrg.length; i++) {
    h3NoUrg[i].style.backgroundColor = 'black';
}

let fim = document.querySelector('footer');
fim.style.backgroundColor = 'gray';
