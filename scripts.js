let rRange = document.querySelector('.r-range');
let gRange = document.querySelector('.g-range');
let bRange = document.querySelector('.b-range');
let random = document.querySelector('#random');
let body = document.querySelector('body');

function color(){
    let radItem = rRange.value;
    let greenItem = gRange.value;
    let blueItem = bRange.value;
    body.style.backgroundColor = "rgb(" + radItem + "," + greenItem + "," + blueItem +")";   
};

function randomColor(){
    let random1 = Math.floor(Math.random() * 255);
    let random2 = Math.floor(Math.random() * 255);
    let random3 = Math.floor(Math.random() * 255); 
    let arrayColor = [random1, random2, random3];
    return arrayColor;
}

rRange.addEventListener('input', function(){
    color();
});

gRange.addEventListener('input', function(){
    color();
});

bRange.addEventListener('input', function(){
    color();
});

random.addEventListener('click', function(){
    let colors = randomColor();
    rRange.value = colors[0];
    gRange.value = colors[1];
    bRange.value = colors[2];
    color();
});