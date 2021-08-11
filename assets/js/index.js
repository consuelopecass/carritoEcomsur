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
            //peliculas.push(item)
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
}