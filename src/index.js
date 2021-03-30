/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// const contenedorImagenes = document.querySelector('#images')
// contenedorImagenes.className = 'bg-gray-100';
// const botonCrear = document.createElement('button');

// botonCrear.name = 'crear'
// botonCrear.type = 'button'
// botonCrear.textContent = 'Crear'
// contenedorImagenes.append(botonCrear)
// botonCrear.className = 'p-2 rounded ring-4 bg-green-300 text-white'

// const accion = () => {
//     const divImagen = document.createElement('div')
//     const imagen = document.createElement('img')
//     imagen.className = 'mx-auto w-80'
    
//     const randomImage = Math.floor(Math.random() * 120) + 1
//     imagen.src = `https://randomfox.ca/images/${randomImage}.jpg`
//     divImagen.append(imagen)
//     divImagen.className = 'p-4'
//     contenedorImagenes.append(divImagen)
//     console.log(divImagen)
// }
// botonCrear.addEventListener('click',accion)
const minimum = 1
const maximum = 122
const randomImage = () => Math.floor(Math.random()*(maximum-minimum)) + minimum 


const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.src = `https://randomfox.ca/images/${randomImage()}.jpg`
    imagen.className = 'mx-auto w-80'
    container.appendChild(imagen)
    return  container     
}
const nuevaImagen = createImageNode()
const mountNode = document.getElementById('images')

const addButton = document.querySelector('button')

addButton.className = 'bg-green-300 p-3 rounded'
const addImage = () => {
    const newImage = createImageNode();
    mountNode.append(newImage)
}
addButton.addEventListener('click',addImage)