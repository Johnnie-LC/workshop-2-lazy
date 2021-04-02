// Crear una funcion registrarImagen recive una imagen le va a decir al observador que en este caso es el interseccrion Observer que observe la imagen que estamos reciviendo

// parar usar la API se debe instanciar del objeto intersectionObserer
// recive una funcion en donde se especifica que hacer por cada imagen
const isIntersecting = (entry) => {
    //ejemplo de que hacer- si esta a 200px entonces has x o y cosa
    // console.log('antes de interseccio ' + entry.target)
    return entry.isIntersecting //true dentro de la pantalla y falso si es lo contrario
} 
var i = 0
const loadImage = (entry) =>{
    // para obtener al imagen que se esta observando
    const container = entry.target // contenedor DIV 
    const imagen = container.firstChild
    const url = imagen.dataset.src
    // load image
    // 1. recuadro gris
    setTimeout(()=>{
        imagen.className = 'mx-auto w-80 h-auto '
        imagen.src = url
    },1000)

    // 2. agregar un boton que elimine todo el html
    // resuelto

    // 3. Reporte de  total de imagenes que se han cargado y el total de imagenes que se han agregadoo 
    // resuelto
    
    // debugger; // parar el comando exactamente en el liugar donde deseo
     // mostrar en consola la imagen que se registró
    // console.log('los interseccion :'+entry.target)
    // console.log(entry)
    i++ 
    console.log(`Imagenes Todas: ${entry.target.parentElement.childElementCount} Interseptadas :${i}`)
    // desregisistra la imagen (unlisten)
    oberver.unobserve(container)
}

const oberver = new IntersectionObserver((entries)=>{
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const resgisterImage = (imagen) =>{
    // intersectionObserver -> observar las imagenes
    oberver.observe(imagen)
    console.log( `Imagenes Todas: ${imagen.parentElement.childElementCount} Interseptadas :${i}`)
}