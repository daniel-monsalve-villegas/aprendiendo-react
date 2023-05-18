import { useEffect, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'

function App() {
  const { movies: mappedMovies } = useMovies()
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    if (newQuery.startsWith(' ')) return
    setQuery(e.target.value)
  }

  useEffect(() => {
    if (query === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (query.match(/^d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (query.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [query])

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='query'
            value={query}
            onChange={handleChange}
            placeholder='Avengers, Star Wars, The Matrix...'
          />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
