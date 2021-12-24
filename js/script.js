let button = document.getElementById('burger');

let navigation = document.getElementById('main_menu');

let shadow = document.getElementById('shadow');

let close = document.getElementById('close');

let search_button = document.getElementById('search_button');

let search = document.getElementById('search_form');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
});

button.addEventListener('click', function(){ 
  shadow.classList.toggle('display-block');
});

search_button.addEventListener('click', function(){ 
  search.classList.toggle('display-block');
});

close.addEventListener('click', function(){ 
    navigation.classList.toggle('display-block');
  });