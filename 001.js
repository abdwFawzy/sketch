const N = 64;
let wide = 960 / N;
const container = document.createElement('div')
const main = document.querySelector('main')
let mouseDown = false
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
        
        container.appendChild(cupe)
        cupe.addEventListener('mouseover', e => {
            if(mouseDown)
            {
                cupe.classList.add('black')
            }
            
        })
        

        
    }
    
}