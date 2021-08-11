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
}