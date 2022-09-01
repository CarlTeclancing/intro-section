let openNav = document.getElementById('open');
let closeNav = document.getElementById('close');


openNav.addEventListener('click', function(){
    let timeIn = setTimeout(function(){
        document.getElementById('slide').style.width = '60%';
        document.getElementById('slide').style.paddingLeft = '10px';
        document.getElementById('close').style.display = 'block';
        document.getElementById('conn').style.display = 'block';
        document.getElementById('container').style.backgroundColor = 'dark';
    }, 200)

}) 

closeNav.addEventListener('click', function(){
    let timeIn = setTimeout(function(){
        document.getElementById('slide').style.width = '0%';
        document.getElementById('slide').style.paddingLeft = '0px';
        document.getElementById('close').style.display = 'none';
        document.getElementById('container').style.backgroundColor = '';
        document.getElementById('conn').style.display = 'none';
    }, 200)

}) 