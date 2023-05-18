import { useEffect, useRef, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'

const useSearch = () => {
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

  return { search, updateSearch, error }
}

const App = () => {
  const { search, updateSearch, error } = useSearch()
  const { movies, loading, getMovies } = useMovies({ search })

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            value={search}
            onChange={handleChange}
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        {loading ? <p>Cargando...</p> : null}
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
