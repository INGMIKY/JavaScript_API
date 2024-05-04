
// function dos () {
//     console.log("dos")
    
// }

// function uno (dos) {
//     console.log("uno")
//     setTimeout(dos, 2000);
// }

// setTimeout(() => uno(dos), 5000);


// const nombre = function(){
//     console.log("nombre");

// }
// nombre();

// const persona = () => console.log("Miguel");
// persona();

// () => console.log()


function uno (){
    console.log("uno");
    setTimeout(dos, 2000);
}

function dos (){
    console.log("dos");
    setTimeout(tres, 2000);
}

function tres (){
    console.log("tres");
    setTimeout(cuatro, 2000);
}

function cuatro (){
    console.log("cuatro");
    setTimeout(cinco, 2000);
}

function cinco (){
    console.log("cinco");  
}

setTimeout(uno, 5000);