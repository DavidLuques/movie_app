import React, { useState } from 'react'

export const MovieFinder = () => {
  const [search, setSearch] = useState('')
  const [movie, setMovie] = useState([])
  const [exist, setExist] = useState(false)
  const [isFirstTime, setIsFirstTime] = useState(true)

  const urlBase = 'https://api.themoviedb.org/3/search/movie'
  const apiKey = '79b8fdd09b8fc385b9af8e7c76930b09' // this has to be secret , could be with dotenv libary 

  const fetchMovie = async () => {
    try {
      const res = await fetch(`${urlBase}?query=${search}&api_key=${apiKey}`)
      const data = await res.json()
      console.log(data.results)
      setMovie(data.results)
      data.results.length ? setExist(true) : setExist(false)
    } catch (error) {
      console.log(error)
    }
  }
  const handleInputChange = (e) => { setSearch(e.target.value) }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchMovie()
    setIsFirstTime(false)

  }

  return (
    <div className='container'>
      <h1 className='title'>Movie finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='search movie...'
          value={search}
          onChange={handleInputChange}></input>
        <button className='search-button'>Search..</button>
      </form>
      {exist && <h2>Founded!!</h2>}

      <div className='movie-list'>
        {exist ? (
          movie.map((mov) => (
            <div key={mov.id} className='movie-card'>
              <img src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`} alt={mov.title} />
              <h2>{mov.title}</h2>
              <p>{mov.overview}</p>
            </div>
          ))
        ) : isFirstTime ? (
          <p>Let's explore for a movie </p>
        ) : <p>No results found!, make sure that the movie exists!</p>

        }
      </div>
    </div>
  )
}
