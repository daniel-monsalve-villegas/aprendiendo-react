import { useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

const useMovies = ({ search }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (search === previousSearch.current) return

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  return { movies, getMovies, loading }
}

export default useMovies
