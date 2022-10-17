const imagesArray = ['01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg'
];

let imagesTags = '';
let selectionTags = '';

const slider = document.querySelector('.content-left');
const imgSelect = document.querySelector('.img-select')

for(let i = 0; i < imagesArray.length; i++){
  imagesTags += `
  <img class="item" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

for(let i = 0; i < imagesArray.length; i++){
  selectionTags += `
  <img class="selection" src="img/${imagesArray[i]}" alt="${imagesArray[i]}">
  `;
}

let counterImages = 0;
let counterSelection = 0;

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

slider.innerHTML += imagesTags;
imgSelect.innerHTML += selectionTags;


const items = document.getElementsByClassName('item');
const selections = document.getElementsByClassName('selection');


items[counterImages].classList.add('active');
selections[counterSelection].classList.add('active');

next.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  items[++counterImages].classList.add('active');
  selections[counterSelection].classList.remove('active');
  selections[++counterSelection].classList.add('active');

  if(counterImages === imagesArray.length){
    counterImages = 0;
  }

  if(counterSelection === imagesArray.length){
    counterSelection = 0;
  }

});

prev.addEventListener('click', function(){
  items[counterImages].classList.remove('active');
  items[--counterImages].classList.add('active');
  selections[counterSelection].classList.remove('active');
  selections[--counterSelection].classList.add('active');

  

});