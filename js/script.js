let button = document.getElementById('burger');

let navigation = document.getElementById('main_menu');

let close = document.getElementById('close');

button.addEventListener('click', function(){ 
  navigation.classList.toggle('display-block');
});

close.addEventListener('click', function(){ 
    navigation.classList.toggle('display-block');
  });