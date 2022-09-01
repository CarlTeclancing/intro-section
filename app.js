let openNav = document.getElementById('open');
let closeNav = document.getElementById('close');


openNav.addEventListener('click', function(){
    let timeIn = setTimeout(function(){
        document.getElementById('slide').style.display = 'flex';
        document.getElementById('close').style.display = 'block';
        document.getElementById('conn').style.display = 'block';
        document.getElementById('container').style.backgroundColor = 'dark';
    }, 300)

}) 

closeNav.addEventListener('click', function(){
    let timeIn = setTimeout(function(){
        document.getElementById('slide').style.display = 'none';
        document.getElementById('slide').style.transition = '1000ms';
        document.getElementById('close').style.display = 'none';
        document.getElementById('container').style.backgroundColor = '';
        document.getElementById('conn').style.display = 'none';
    }, 300)

}) 