// Crear una funcion registrarImagen recive una imagen le va a decir al observador que en este caso es el interseccrion Observer que observe la imagen que estamos reciviendo

// parar usar la API se debe instanciar del objeto intersectionObserer
// recive una funcion en donde se especifica que hacer por cada imagen
const isIntersecting = (entry) => {
    //ejemplo de que hacer- si esta a 200px entonces has x o y cosa
    return entry.isIntersecting //true dentro de la pantalla y falso si es lo contrario
} 

const accion = (entry) =>{
    // para obtener al imagen que se esta observando
    const nodo = entry.target
    // mostrar en consola la imagen que se registró
    console.log('Hola')

    // desregisistra la imagen (unlisten)
    oberver.unobserve(nodo)
}

const oberver = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(accion)
})

export const resgisterImage = (imagen) =>{
    // intersectionObserver -> observar las imagenes
    oberver.observe(imagen)
}