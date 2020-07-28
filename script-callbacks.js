const API_URL = 'https://swapi.dev/api/'
const PEOPLE_URL = 'people/:id'

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}`
const opts = { crossDomain: true}

// const onPeopleResponse = function(people){
//     console.log(`Hola, yo soy ${people.name} - ${people.url}`)
// }

// $.get(lukeUrl, opts, onPeopleResponse)

// $.get(lukeUrl,opts, function(luke){
//     console.log(`Hola, yo soy ${luke.name}`)
// })

// $.get(lukeUrl, opts, (luke) => {console.log(`Hola, yo soy ${luke.name}`)})

// function obtenerPersonaje(id){
//     const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
//     $.get(url, opts, onPeopleResponse)
// }

// for(var i=1;i<20;i++){
//     obtenerPersonaje(i)
// }

// function obtenerPersonaje(id,callback){
//     const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
    
//     $.get(url, opts, callback)
//      .fail(() => {console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
//      })
    
// }

// Callback hell!!
// obtenerPersonaje(1, function(people){
//     console.log(`Hola, yo soy ${people.name} - ${people.url}`)
//     obtenerPersonaje(2, function(people){
//         console.log(`Hola, yo soy ${people.name} - ${people.url}`)
//         obtenerPersonaje(3, function(people){
//             console.log(`Hola, yo soy ${people.name} - ${people.url}`)
//             obtenerPersonaje(4, function(people){
//                 console.log(`Hola, yo soy ${people.name} - ${people.url}`)
//                 obtenerPersonaje(5, function(people){
//                     console.log(`Hola, yo soy ${people.name} - ${people.url}`)
//                     obtenerPersonaje(6, function(people){
//                         console.log(`Hola, yo soy ${people.name} - ${people.url}`)
//                     })
//                 })
//             })
//         })
//     })
// })

//Promise

function obtenerPersonaje(id){
    return new Promise((resolve,reject) =>{
        const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}`
        
        $
            .get(url, opts, function(data){
                resolve(data)
            })
            .fail(() => reject(id))
    })
}

function onError(id){
    console.log(`Sucedió un error. No se pudo obtener el personaje ${id}`)
}

// function onSuccess(personaje){
//     console.log(`Hola, yo soy ${personaje.name} - ${personaje.url}`)
// }

// for(var i=1;i<=20;i++){
//     obtenerPersonaje(i)
//     .then(personaje => {
//         console.log(`Hola, yo soy ${personaje.name} - ${personaje.url}`)
//         return obtenerPersonaje(++i)
//     })
//     .catch(onError)
// }

async function obtenerPersonajes(){
    var ids = [1,2,3,4,5,6,7,8,9,10]
    var promises = ids.map(id => obtenerPersonaje(id))
    try{
        var personajes = await Promise.all(promises)
        console.log(personajes)
    }    
    catch(id){
        onError(id)
    }
}

console.log("Llamada a la funcion asincrónica...")
obtenerPersonajes()
console.log("La está llamando...")

// Promise
//     .all(promises)
//     .then(personajes => console.log(personajes))
//     .catch(onError)