const title = document.createElement('h1');
const h2 = document.createElement('h2');
const button = document.createElement('button');
const body = document.body;
const container = document.createElement('div');

title.textContent = 'Random Color';
h2.textContent = '#FFFFFF'
button.textContent = 'Cambiar color'

container.appendChild(title)
container.appendChild(h2)
container.appendChild(button)
body.appendChild(container);


body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.justifyContent = 'center';
body.style.height = '90vh';
body.style.transition = 'background-color 0.3s'


container.style.textAlign = 'center'
container.style.padding = '40px'
container.style.backgroundColor = 'antiquewhite';
container.style.borderRadius = '10px'


button.style.border = 'none';
button.style.padding = '10px'
button.style.boxShadow = '0 0 5px';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.backgroundColor = 'blueviolet';
button.style.color = '#fff'

button.addEventListener('click', (e) => {
    e.preventDefault();
    h2.textContent = getHexColor();
    button.style.boxShadow = '0 0 5px 5px '+h2.textContent;
    body.style.backgroundColor = h2.textContent;
    
})

const getHexColor = () => {
    let numeros = '0123456789ABCDEF';
    let codigo = '#';
    for(let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * 16);
        codigo += numeros[num]
    }
    return codigo
}
