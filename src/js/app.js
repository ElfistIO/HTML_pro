let button = document.getElementById('burger');

let navigation = document.getElementById('main_menu');

let close = document.getElementById('close');

let search_button = document.getElementById('search_button');

let search = document.getElementById('search_form');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
});

search_button.addEventListener('click', function(){ 
  search.classList.toggle('display-block');
});

close.addEventListener('click', function(){ 
    navigation.classList.toggle('display-block');
  });

import * as flsFunctions from "./modules/function.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination} from "swiper";

const swiper = new Swiper();