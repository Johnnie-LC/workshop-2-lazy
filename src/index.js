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
// nos importamos el metodo que  quisimos exportar de lazy.js
import { resgisterImage } from "./lazy";

const minimum = 1
const maximum = 122
const randomImage = () => Math.floor(Math.random()*(maximum-minimum)) + minimum 


const createImageNode = () => {
    const container = document.createElement('div')
    container.className = 'p-4'

    const imagen = document.createElement('img')
    imagen.dataset.src = `https://randomfox.ca/images/${randomImage()}.jpg`
    imagen.className = 'mx-auto w-80'
    container.appendChild(imagen)
    return  container     
}

const mountNode = document.getElementById('images')

const addButton = document.querySelector('#addButton')
const removeButton = document.querySelector('#removeButton')

addButton.className = 'bg-green-300 p-3 rounded text-green-600'
const addImage = () => {
    const newImage = createImageNode();
    // newImage.firstChild.width = 'background-color: gray; height: 20rem; width: 20rem;src: "#h" '
    const imagen = newImage.firstChild 
    imagen.className = 'mx-auto w-80 h-80 bg-gray-300 rounded-md'
    mountNode.append(newImage)
    // usando el observador para detectar que imagenes se visualizan en en la pantalla 
    resgisterImage(newImage)
    // console.log('cuantos imágenes :' + mountNode.childElementCount)
}

// remover imagenes del html
const removeImage = () => {
   const allImages = mountNode.querySelectorAll('div')
   return allImages.forEach((image)=> image.remove())
}

addButton.addEventListener('click',addImage)
removeButton.addEventListener('click', removeImage)

