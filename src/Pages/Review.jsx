import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faRocket, faStar } from "@fortawesome/free-solid-svg-icons";
import useMovies from "../Components/Usemovies";
import { Link } from "react-router";
import { useState } from "react";


const Review = () => {

    const movies = useMovies();


    const genreMap = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  18: "Drama",
  27: "Horror",
  10749: "Romance",
  53: "Thriller",
  };
/*   
  console.log(movies); */

  const uniqueYears = [
  ...new Set(
    movies
      .map(movie => movie.release_date.slice(0, 4))
      .filter(Boolean)
  )
  ].sort((a, b) => b - a); 
  
 

  const [search, setSerach] = useState("")
  const [opgenre, setopgenre] = useState("")
  const [opyear, setopyear] = useState("")

   const filteredmoview = movies.filter(movie => movie.poster_path && (search ? movie.title.toLowerCase().includes(search.toLowerCase()) : true) && (opgenre ? movie.genre_ids.includes(Number(opgenre)) : true) && (opyear ? movie.release_date.slice(0, 4) == opyear : true))

  const handleReset = () => {
    setSerach("");
    setopgenre("");
    setopyear("")
  }
  
  return (
    <>
      <div className="flex justify-center mt-15">
        <input id="search" placeholder="Search Movie.." className="border border-white-200 text-gray-400 text-[22px] w-[500px] px-2 py-1 rounded-xl" value={search} onChange={e => setSerach(e.target.value)}></input>
      </div>
      <div className="flex flex-row gap-[15px] justify-center mt-5">
      <div className="text-white">
          <select className="text-black bg-white py-1 px-1 rounded-lg"
        value={opgenre}    onChange={e => setopgenre(e.target.value)}>
          <option value="" >Select Genre</option>
          {Object.entries(genreMap).map(([id, name]) => (
            <option key={id} value={id}>{ name}</option>
          ))}
        </select>
        </div>
        <div>
          <select className="text-black bg-white py-1 px-1 rounded-lg"
            value={opyear}  onChange={e => setopyear(e.target.value)}>
            <option value="">Year</option>
            {uniqueYears.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </select>
        </div>
        <div>
          <select className="text-black bg-white py-1 px-1 rounded-lg">
            <option>Rating</option>
            <option>1 - 3</option>
            <option>4 - 6</option>
            <option>7 - 10</option>
          </select>
        </div>
        <div>
          <button className="text-black bg-white py-1 px-1 rounded-lg hover:scale-107 duration-100 ease-in-out" onClick={handleReset}>
            Clear Filters X
          </button>
        </div>
      </div>
      <div className="text-white grid grid-cols-5 w-full gap-7 mt-10 m justify-center items-center" id="rating">
        {filteredmoview.length === 0 ? (<h1 className="col-span-5 text-center text-2xl my-40 ">
      No movies found for your search!!
    </h1>) : (filteredmoview.map((top, index) => (<div key={`${top.id}-${index}`} className="flex flex-col items-center hover:scale-107 duration-100 ease-in-out border border-[oklch(10.9%_0.041_260.031)] bg-[oklch(18.9%_0.042_264.695)] rounded-2xl py-2 h-[450px] w-[270px]">
                  <div className=""> 
                  <img src={`https://image.tmdb.org/t/p/w500${top.poster_path}`} className="w-[220px] h-[300px] rounded-xl"/>
                      <h1 className="text-[18px] w-[200px] text-center pt-2">{top.title}</h1>
                      <h2 className="text-[15px] w-[200px] text-gray-400 text-center pt-1">
            {top.genre_ids.map((id) => genreMap[id]).filter(Boolean).join(", ")}
                      </h2>
                      <h2 className="text-center pt-1">Rating:{top.vote_average < 7 ? "8.5" : top.vote_average.toFixed(1)}<span className="text-[oklch(82.8%_0.189_84.429)]"><FontAwesomeIcon icon={faStar}/></span></h2>
                      </div>
              </div>)))}
      </div>
      <div>
              <footer>
                  <div className="flex flex-row justify-center gap-[35px] bg-[oklch(20.8%_0.042_265.755)] pt-10 mt-5 h-[250px]">
                  <div className="w-[400px] text-white text-center">
                      <h1 className="text-[22px] font-bold pb-3">Moview Review</h1>
                      <p className="text-[18px]">Search thousands of movies, explore detailed information, and share your ratings with an interactive star-based system — all in one place.</p>
                  </div>
                  <div className="w-[400px] text-white text-center list-none pb-3">
                      <ul className="text-[22px] font-bold">Quick Links</ul>
                      <li className="text-[18px]"><a href="#search">Search</a></li>
                      <li className="text-[18px]"><Link to={"/"}>Home</Link></li>
                      <li className="text-[18px]"><a href="#rating">Rating</a></li>
                  </div>
                  <div className="w-[400px] text-white text-center">
                      <h1 className="text-[22px] font-bold pb-3">Contact</h1>
                      <h2 className="text-[18px]">Email us: moviereview@gmail.com</h2>
                      </div>
                      </div>
              </footer>
          </div>
    </>
  )
}

export default Review
