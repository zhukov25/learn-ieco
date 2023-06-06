const menuToggle = document.querySelector('.burger-menu');
const navigation = document.querySelector('.menu');
const line1 = document.querySelector('#line-1');
const line2 = document.querySelector('#line-2');
const burger = document.querySelector('.burger-menu');
const links = document.querySelectorAll('a');
const body = document.querySelector('body');

// /////////////////////////////////////////////////////////////

menuToggle.addEventListener('click', () => {
    navigation.classList.toggle('show');
    console.log('press');
    line1.classList.toggle('turn1');
    line2.classList.toggle('turn2');
    burger.classList.toggle('turned');
    burger.classList.contains('turned') ? body.style.overflowY = 'hidden' : body.style.overflowY = '';
    
});


links.forEach((a) => {
    a.addEventListener('click', () => {
        console.log('press');
        navigation.classList.toggle('show');
        line1.classList.toggle('turn1');
        line2.classList.toggle('turn2');
        burger.classList.toggle('turned');
        body.style.overflowY = '';
    });
});



