import axios from "axios";
import { useEffect, useState } from "react";

export function useMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=0940ac43c5c9b662ea2d5ff720b99547")
      .then(response => setMovies(response.data.results));
  }, []);

  return movies;
}

export default useMovies;