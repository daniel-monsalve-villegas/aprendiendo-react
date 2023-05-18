import responseMovies from '../mocks/results.json'

const useMovies = () => {
  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

  return { movies: mappedMovies }
}

export default useMovies
