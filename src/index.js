//const h1 = document.getElementById('page_title');
const h1 = document.querySelector('h1');

//console.log(h1);

h1.style.color = 'green';

const p1 = document.querySelector('p');

//p1.innerHTML = "Pickles is a ho";

p1.textContent = "Prudence is a potato.";

const ol = document.querySelector('ol');
for (let i = 0; i < 5; i++) {
    const li = document.createElement('li');
    li.textContent = (i + 1)//.toString();
    ol.appendChild(li);
}

// const li = document.createElement('li');

// li.textContent = "This is the first list item."

// ol.appendChild(li);

const p2 = document.querySelector('.removable');
//console.log(p2);

p2.remove();