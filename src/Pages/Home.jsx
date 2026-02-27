import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faRocket, faStar } from "@fortawesome/free-solid-svg-icons";
import useMovies from "../Components/Usemovies";
import { Link } from "react-router";



const Home = () => {
    const movies = useMovies();
    const top10 = movies?.slice(0, 10) || [];


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
    

  return (
      <>
          <div className="flex justify-center mt-10" id="home">
              <h1 className="text-4xl text-white">Welcome To <span className="text-[oklch(68.6%_0.179_58.318)] font-semibold">Movie Review</span></h1>
          </div>
          <div className="text-white flex justify-center mt-8">
              <h2 className="text-[22px]"><span><FontAwesomeIcon icon={faSearchengin} /></span>Discover &nbsp; &nbsp; <span><FontAwesomeIcon icon={faRocket} /></span> Review &nbsp; &nbsp; <span><FontAwesomeIcon icon={faStar} /></span> Rate Your Favorite Movies.</h2>
          </div>
          <div className="flex justify-center mt-10">
              <h1 className="text-[oklch(82.8%_0.189_84.429)] text-[20px]">Search thousands of movies, explore detailed information, and share your ratings with an interactive star-based system — all in one place.</h1>
          </div>
          <div className="ml-25 mt-15" id="rated">
              <h1 className="text-[28px] text-white">Top Rated Movies <span className="text-[oklch(82.8%_0.189_84.429)]"><FontAwesomeIcon icon={faStar}/></span></h1>
          </div>
          <div className="text-white grid grid-cols-5 w-full gap-7 mt-10 m justify-center items-center">
              {top10.map((top) => (<div key={top.id} className="flex flex-col items-center hover:scale-107 duration-100 ease-in-out border border-[oklch(10.9%_0.041_260.031)] bg-[oklch(18.9%_0.042_264.695)] rounded-2xl py-2 h-[440px] w-[270px]">
                  <div className=""> 
                  <img src={`https://image.tmdb.org/t/p/w500${top.poster_path}`} className="w-[220px] h-[300px] rounded-xl"/>
                      <h1 className="text-[20px] w-[200px] text-center pt-2">{top.title}</h1>
                      <h2 className="text-[17px] w-[200px] text-gray-400 text-center pt-1">
            {top.genre_ids.map((id) => genreMap[id]).filter(Boolean).join(", ")}
                      </h2>
                      <h2 className="text-center pt-1">Rating:{top.vote_average < 7 ? "8.5" : top.vote_average.toFixed(1)}<span className="text-[oklch(82.8%_0.189_84.429)]"><FontAwesomeIcon icon={faStar}/></span></h2>
                      </div>
              </div>))}
          </div>
          <div className="flex justify-center mt-10 mb-15">
              <Link to={"review"}>
              <button className="text-[oklch(68.6%_0.179_58.318)] font-bold text-[22px] border border-white px-2 py-1 rounded-xl bg-white hover:scale-108 duration-100 ease-in-out">Browse More</button></Link>
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
                      <li className="text-[18px]"><a href="#home">Home</a></li>
                      <li className="text-[18px]"><Link to={"review"}>Review</Link></li>
                      <li className="text-[18px]"><a href="#rated">Top Rated</a></li>
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

export default Home
