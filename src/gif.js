import React, {useState} from 'react'
import axios from 'axios'

function GifSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    const [gifs, setGifs] = useState([])

    const fetchGifs = async () => {
        console.log('Fetching GIFs...');
        let APIKEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'
        let baseUrl = 'https://api.giphy.com/v1/gifs/search'
        let params = new URLSearchParams({
            api_key: APIKEY,
            q: searchTerm
        })
        let url = `${baseUrl}?${params.toString()}`

        let response = await axios.get(url);
        console.log('response GIFs...', response.data.data);
        setGifs(response.data.data)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetchGifs()
    }

    return(
        <div>
            <h1>Gif Search Page</h1>
            <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search GIFS'
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {gifs.map((gif) => {
                    return <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title}/>
                })}
            </div>
        </div>
    )
}

export default GifSearch;