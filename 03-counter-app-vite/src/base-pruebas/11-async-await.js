
export const getImagen = async() => {

    try {

        const apiKey = '33DI1wkBm1xJ7ZjT5b0QHzlS29bdSdo8';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'No se encontró la imagen';
    }
    
    
    
}

 getImagen();



