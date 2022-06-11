var magicNumber,gridL = 10,gridSize,colorGL = "#ff0000",randomColor="#256fe2";

window.onload = function(){run();}
setInterval(random, 1000);

function random(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
}

document.getElementById("gs").onclick = function(){promptGrid();}
document.getElementById("clr").onclick = function(){clearButton();}
document.getElementById("color").onclick = function(){test();}
document.getElementById("rainbow").onclick = function(){goRainbow();}

var colorB =  document.getElementById("color");
colorB.addEventListener("change", updateColor);

function run(){
    createGrids(10);
    test();
}

function updateColor(e){
    colorGL = e.target.value;
}

function test(){
    for(i=0;i<gridL*gridL;i++){
        document.getElementById(i+"n").onmouseenter = function(event){
            event.target.style.backgroundColor = colorGL;
        };
    }
}


function goRainbow(){
    for(i=0;i<gridL*gridL;i++){
        document.getElementById(i+"n").onmouseenter = function(event){
            event.target.style.backgroundColor = randomColor;
        };
    }
}



function clear(){
    
    const myNode = document.getElementById("canvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    
}

function clearButton(){
    clear();
    createGrids(gridL);
}

function promptGrid(){
    grid = prompt("Enter grid size");
    clear();
    createGrids(grid);
}

function createGrids(gridSize){
    const full = document.getElementById("canvas");
    gridL = gridSize;
    for(i=0;i<gridSize*gridSize;i++)
    {
        magicNumber = 512/gridSize;
        magicNumber = magicNumber + "px";
        n = document.createElement('div');
        n.style.minWidth = magicNumber;
        n.style.maxWidth = magicNumber;
        n.style.minHeight = magicNumber;
        n.style.maxHeight = magicNumber;
        n.classList.add("paint-on");
        id = i+"";
        n.setAttribute("id",id+"n");
        full.appendChild(n);
    }
    test();
}




