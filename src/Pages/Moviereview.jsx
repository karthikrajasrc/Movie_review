import { faArrowLeft, faArrowRightFromBracket, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";



const Moviereview = () => {

    const navigate = useNavigate();

    const [movies, setMovies] = useState(null); 

    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=0940ac43c5c9b662ea2d5ff720b99547`)
            .then(response => setMovies(response.data));
    }, [id]);

      if (!movies) {
    return (<div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-yellow-400"></div>
    </div>);
    }
    
    console.log(movies);

    const handleBack = () => {
        navigate(-1);
    }
    
    let [yyyy, mm, dd] = movies.release_date.split("-")
    const date = `${dd}-${mm}-${yyyy}`;




  return (
      <>
          <div>
              <div>
                  <button className="text-black text-[23px] ml-25 mt-7 border border-gray-400 px-2 py-0.5 rounded-xl bg-white hover:scale-108 duration-100 ease-in-out" onClick={handleBack}> <span className="text-black text-[19px]"><FontAwesomeIcon icon={faArrowLeft}/></span> Back  </button>
              </div>
              <div className="flex flex-row text-white gap-15 mt-10 ml-10">
              <div>
                  <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} className="w-[450px] h-[550px] rounded-xl" />
                  </div>
                  <div className="w-[800px]">
                      <h1 className="text-[27px] font-semibold">Title: {movies.title}</h1>
                      <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-5">Genres: <span className="text-gray-200"> {movies.genres.map(gen => gen.name).join(", ")}</span></h2>
                      <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Status: <span className="text-gray-200">{movies.status}</span></h2>
                      <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Release Date: <span className="text-gray-200">{date}</span></h2>
                      <p className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">OverView: <span className="text-gray-200">{movies.overview?.trim() ? movies.overview : "An immersive cinematic journey that blends storytelling, emotion, and powerful performances. This film offers a captivating narrative experience designed to entertain and resonate with audiences of all kinds."}</span></p>
                      <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Popularity: <span className="text-gray-200">{movies.popularity.toFixed(2)}</span></h2>
                      <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Vote Average: <span className="text-gray-200">{ movies.vote_average.toFixed(2)}</span> <span className="text-[oklch(82.8%_0.189_84.429)]"><FontAwesomeIcon icon={faStar}/></span></h2>
                  </div>
                  </div>
          </div>
      </>
  )
}

export default Moviereview
