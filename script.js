let magicNumber,grid,gridSize,colorGL;

function paint(id){
    white = document.getElementById(id);
    white.style.backgroundColor = "blue";
}
function clear(){
    
    const myNode = document.getElementById("canvas");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    }
    
}

function promptGrid(){
    grid = prompt("Enter grid size");
    clear();
    createGrids(grid);
}

function createGrids(gridSize){
    const full = document.getElementById("canvas");
    for(i=0;i<gridSize*gridSize;i++)
    {
        magicNumber = 512/gridSize;
        console.log(magicNumber);
        magicNumber = magicNumber + "px";
        n = document.createElement('div');
        n.style.minWidth = magicNumber;
        n.style.maxWidth = magicNumber;
        n.style.minHeight = magicNumber;
        n.style.maxHeight = magicNumber;
        n.classList.add("paint-on");
        id = i+"";
        n.setAttribute("id","id");
        full.appendChild(n);
    }
}

document.getElementById("gs").onclick = function(){promptGrid();}
document.getElementsByClassName("paint-on").onmouseover = function(){paint(this.id);}