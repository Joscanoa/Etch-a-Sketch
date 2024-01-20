const mainContainer = document.querySelector('#mainContainer');

function createGrid(){
    for(let i = 1; i < 17; i++){
        const rowContainer = document.createElement('div');
        
        for(let j=1; j < 17; j++){
            let row = i + 'pixel' + j ;
            const pixel = document.createElement('div');
            pixel.style.cssText = 'border-style: solid; height: 16px; width: 16px; border-width: 1px;'
            pixel.classList.add(row);
            pixel.addEventListener('mouseenter', () => {
                pixel.style.cssText = 'border-style: solid; height: 16px; width: 16px; border-width: 1px; background-color: black;'
            });
            
            rowContainer.appendChild(pixel);    
            
        }
        rowContainer.style.cssText = 'display: flex'
        
        mainContainer.appendChild(rowContainer);

    }
}

function createGridChoice(gridSize){
    
    for(let i = 1; i < gridSize+1; i++){
        const rowContainer = document.createElement('div');
        
        for(let j=1; j < gridSize+1; j++){
            let row = i + 'pixel' + j ;
            const pixel = document.createElement('div');
            pixel.style.cssText = 'border-style: solid; height: 16px; width: 16px; border-width: 1px;'
            pixel.classList.add(row);
            pixel.addEventListener('mouseenter', () => {
                pixel.style.cssText = 'border-style: solid; height: 16px; width: 16px; border-width: 1px; background-color: black;'
            });
            
            rowContainer.appendChild(pixel);    
            
        }
        rowContainer.style.cssText = 'display: flex'
        
        mainContainer.appendChild(rowContainer);

    }
}

createGrid()
const theGridSetter = document.querySelector('#theGridSetter');

theGridSetter.addEventListener('click', () => {
    let dimension = prompt('What dimensions would you like');
    while(mainContainer.firstChild){
        mainContainer.removeChild(mainContainer.lastChild);
    }
    let x = parseInt(dimension)
    createGridChoice(x)
});

