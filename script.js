const url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5";


// primer parametro del fecth es un get, un segundo parametro es un post

function listaImagenes(){
    fetch(url)
    .then(response => response.json())
    .then(datosImagenes => {
        console.log(datosImagenes);

        const card = document.querySelector("[data-ul]");

        datosImagenes.forEach( elemento => {
            const contenido = `<li class="card">
            <img class="card__image" src="${elemento.url}" alt="imagen">
            <h3 class="card__title">${elemento.title}</h3>
            </li>`

            card.innerHTML= card.innerHTML + contenido; 
        })
    })   
    .catch( error => console.log(error));
}
listaImagenes();


// dependiendo del resultado que nos dé fecth de la promesa se puede utilizar el then o catch 
// para manerar las solciitudes 
// then(); cuando la promesa es complida
// catch(); cuando la promesa es rechazada  


// es la manera de como nos puede responder una api mediante una promesa si la promesa
// fue aceptada, se realiza la entrega de información o fue rechazada
// const solicitud = new Promise((resolve, reject) =>{
//     const response = "resolvee"

//     if (response == "resolve"){
//         resolve("La promesa se cumplio");
//     }else{
//         reject("La promesa no se cumplio");
//     }

// });

// console.log(solicitud);