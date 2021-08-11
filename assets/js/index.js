let carrito = []
let peliculas = []

const fetchData = async(busqueda) => {
    var busqueda = document.querySelector('#busqueda').value;
    try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=4213517b&s=${busqueda}`)
        const data = await res.json();
        console.log(data)
        inyectarCards(data)
    } catch (error) {
        console.log(error);
    }
}

const inyectarCards = data => {
    const contenido = document.querySelector('#contenido')
    console.log(data)
    var html = ''
    for (var i = 0; i < data.Search.length; i++) {
        var item = data.Search[i]
        peliculas.push(item)
        html += `<div class="item">
                        <div class="contenedorPelicula">
                            <img src="${item.Poster}" alt="${item.Title}">
                            <h3> Titulo: ${item.Title}</h3>
                            <p> Año: ${item.Year}</p>
                            <p> ID: ${item.imdbID}</p>
                            <p> Tipo: ${item.Type}</p>
                        </div>
                        <div class="contenedorBoton">
                        <button id="comprar" onclick="agregarCarrito('${item.imdbID}')" class="">Comprar</button>
                        </div>
                    </div>`
    }
    contenido.innerHTML = html
}

const agregarCarrito = (id) => {
    alert('me agregaste!')
    let miPelicula = peliculas.find(pelicula => pelicula.imdbID === id)
    console.log(id)
    console.log(miPelicula)

    let checkPelicula = carrito.find(carrito => carrito.id === id)
    if (checkPelicula === undefined) {
        carrito.push({
            id: miPelicula.imdbID,
            titulo: miPelicula.Title,
            cantidad: 1
        })
        inyectarPelicula()
    } else {
        carrito.map(pelicula => {
            if (pelicula.id === id) {
                pelicula.cantidad++
            }
        })
    }
    console.log(carrito)
}

const inyectarPelicula = () => {
    const tabla = document.querySelector('#tabla')
    tabla.innerHTML = ''
    alert('HOLA')
    carrito.forEach(pelicula => {
        console.log(pelicula)
        var html = ''
        html += `<div class="item">
                        <div class="info">
                            <h3> Titulo: ${pelicula.titulo}</h3>
                            <p> Cantidad: ${pelicula.cantidad}</p>
                            <button onclick="aumentar('${pelicula.id}')">+</button>
                            <button onclick="disminuir('${pelicula.id}')">-</button>
                        </div>
                    </div>`
        tabla.innerHTML += html
    })
    console.log()
}

const aumentar = (id) => {
    carrito.map(pelicula => {
        if (pelicula.id === id) {
            pelicula.cantidad++
        }
    })
    inyectarPelicula()
}

const disminuir = (id) => {
    carrito.map(pelicula => {
        if (pelicula.cantidad === 1 && pelicula.id === id) {
            carrito.splice(carrito.indexOf(pelicula), 1)
        } else if (pelicula.id === id) {
            pelicula.cantidad--
        }
    })
    inyectarPelicula()
}