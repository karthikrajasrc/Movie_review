import { useEffect, useState } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=0940ac43c5c9b662ea2d5ff720b99547")
      .then(res => res.json())
      .then(data => setMovies(data.results));
  }, []);

  return movies;
}

export default useMovies;