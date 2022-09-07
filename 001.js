const range = document.querySelector('#grid').value;
const main = document.querySelector('main');
const reset = document.querySelector('.reset');
const eraser = document.querySelector('.eraser');
const color = document.querySelector('.color');
const N = range;
let wide = 330 / N;
const container = document.createElement('div')
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

main.appendChild(container)
container.classList.add("container")
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        let cupe = document.createElement("div")
        cupe.classList.add("cupe");
        cupe.style.width = `${wide}px`;
        cupe.style.height = `${wide}px`;    
        cupe.style.border = '1px solid black';
        container.appendChild(cupe)
        cupe.addEventListener('mouseover', e => {
            if(mouseDown)
            {
                cupe.classList.add('black')
            }
            
        })
        eraser.addEventListener('click', () => {
            cupe.addEventListener('mouseover', e => {
                if(mouseDown)
                {
                    cupe.classList.remove('black')
                }
                
            })
        });
        color.addEventListener('click', () => {
            cupe.addEventListener('mouseover', e => {
            if(mouseDown)
            {
                cupe.classList.add('black')
            }
        
            });
        });
    }
}
reset.addEventListener('click', e => {window.location.reload()});

