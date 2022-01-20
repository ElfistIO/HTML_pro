let button = document.getElementById('burger');

let navigation = document.getElementById('main_menu');

let shadow = document.getElementById('shadow');

let close = document.getElementById('close');

let search_button = document.getElementById('search_button');

let search = document.getElementById('search_form');

let filter_button = document.getElementById('filter_button');

let filter_menu = document.getElementById('filter_menu');

let size_button = document.getElementById('size_button');

let size_menu = document.getElementById('size_menu');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
});

button.addEventListener('click', function(){ 
  shadow.classList.toggle('display-block');
});

search_button.addEventListener('click', function(){ 
  search.classList.toggle('display-block');
});

filter_button.addEventListener('click', function(){ 
  filter_menu.classList.toggle('display-block');
});

size_button.addEventListener('click', function(){ 
  size_menu.classList.toggle('display-block');
});

close.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
});