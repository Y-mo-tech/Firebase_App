import React, {useState} from 'react'
import axios from 'axios'

function GifSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    const [gifs, setGifs] = useState([])

    const fetchGifs = async () => {
        let APIKEY = 'GlVGYHkr3WSBnllca54iNt0yFbjz7L65'
        let baseUrl = 'api.giphy.com/v1/gifs/search'
        let params = {
            api_key: APIKEY,
            q: searchTerm
        }
        let url = `${baseUrl}${qs.stringify(params)}`

        let response = await axios.get(url);

        setGifs(response.data.data)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        fetchGifs()
    }

    return(
        <div>
            <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search GIFS'
                />
                <button type="submit">Search</button>
            </form>

            <div>
                {gifs.map((gif) => {
                    <img key={gif.id} src={gif.images.fixed_heighturl} alt={gif.title}/>
                })}
            </div>
        </div>
    )
}

export default GifSearch;