    import { faArrowLeft, faArrowRightFromBracket, faStar } from "@fortawesome/free-solid-svg-icons";
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import axios from "axios";
    import { useEffect, useState } from "react";
    import { Link, useNavigate, useParams } from "react-router";



    const Moviereview = () => {

        const navigate = useNavigate();

        const [movies, setMovies] = useState(null); 
        const [rating, setrating] = useState(0)
        const [useName, setuseName] = useState("");
        const [useComments, setComments] = useState("")
        const [reviews, setreviews] = useState([]);


        const { id } = useParams();



                const handleSubmit = (e) => {
                    e.preventDefault();

            const info = {
                name: useName,
                rated: rating,
                comment: useComments
            };
        
                    const update = ([...reviews, info]);
                    setreviews(update);

                    localStorage.setItem(`reviewed_${id}`, JSON.stringify(update));


            setuseName("");
            setrating(0);
            setComments("");

        }

                useEffect(() => {
            if (id) {
                const stored = localStorage.getItem(`reviewed_${id}`);
           
        
            if (stored) {
                setreviews(JSON.parse(stored));
                 }
            }
        }, [id]);





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
                    <div className="w-[450px]">
                        <h1 className="text-[27px] font-semibold">Title: {movies.title}</h1>
                        <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-5">Genres: <span className="text-gray-200"> {movies.genres.map(gen => gen.name).join(", ")}</span></h2>
                        <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Status: <span className="text-gray-200">{movies.status}</span></h2>
                        <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Release Date: <span className="text-gray-200">{date}</span></h2>
                        <p className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">OverView: <span className="text-gray-200">{movies.overview?.trim() ? movies.overview : "An immersive cinematic journey that blends storytelling, emotion, and powerful performances. This film offers a captivating narrative experience designed to entertain and resonate with audiences of all kinds."}</span></p>
                        <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Popularity: <span className="text-gray-200">{movies.popularity.toFixed(2)}</span></h2>
                        <h2 className="font-semibold text-[oklch(68.6%_0.179_58.318)]   text-[22px] mt-2">Vote Average: <span className="text-gray-200">{movies.vote_average.toFixed(2)}</span> <span className="text-[oklch(82.8%_0.189_84.429)]"><FontAwesomeIcon icon={faStar} /></span></h2>
                        </div>
                        <div>
                        <form onSubmit={handleSubmit}>
                        <div className="border px-4 py-4 w-[400px] rounded-xl mt-5 border-[oklch(68.6%_0.179_58.318)] bg-[oklch(20.9%_0.042_264.695)]">
                            <h1 className="font-bold text-[22px] text-center my-2">Rate The Movie</h1>
                            <h1 className="text-center text-[18px]">Name: <input placeholder="Enter Your Name..." className="border border-gray-500 p-1 rounded-xl mt-3 text-center align-center items-center" required onChange={e => setuseName(e.target.value)} /></h1> 


                            <h1 className="text-center text-[20px] mt-6 select-none">Rating:{" "}{[1, 2, 3, 4, 5].map(star => (<span key={star} onClick={() => setrating(star)} className="cursor-pointer"><FontAwesomeIcon
            icon={faStar}
            className={star <= rating ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"}
                            /></span>))}</h1>
                                <h1 className="text-center text-[18px] mt-5"> Comment: <textarea placeholder="Enter Your Comments..." className="border border-gray-500 p-1 rounded-xl mt-3 text-center align-center items-center" cols={30} onChange={e => setComments(e.target.value)}/></h1>
                                <div className="text-center">
                                    <button className="text-black text-[23px] mt-7 border border-gray-400 px-2 py-0.2 rounded-xl bg-white hover:scale-108 duration-100 ease-in-out" type="submit">Submit</button>
                                </div>
                            </div>
                            </form>
                            </div>
                </div>
                <div className="flex justify-center mt-20">
                    <h1 className="text-white text-[28px] dont-bold">Rating & Comments</h1>
                </div>
                <div className="mt-15 ml-15">
                <div className="flex flex-row gap-5 w-full flex-wrap ">
                    {reviews.map((rate, index) => (<div key={index} className="gap-10 mx-4 mt-4 border border-[oklch(68.6%_0.179_58.318)] rounded-xl px-3 py-4 text-white bg-[oklch(20.9%_0.042_264.695)]"><h1 className="text-[22px] font-semibold py-1">Name: {rate.name}</h1>
                        <h2 className="text-[22px] font-semibold py-1">Ratings: {rate.rated}<span className="text-[oklch(82.8%_0.189_84.429)]"><FontAwesomeIcon icon={faStar} /></span></h2>
                        <p className="text-[22px] font-semibold py-1">Commets: <span className="text-[18px]">{rate.comment}</span></p>
                    </div>))}
                    </div>
                    </div>
            </div>
            <div>
                                <footer>
                    <div className="flex flex-row justify-center gap-[35px] bg-[oklch(20.8%_0.042_265.755)] pt-10 mt-15 h-[250px]">
                    <div className="w-[400px] text-white text-center">
                        <h1 className="text-[22px] font-bold pb-3">Moview Review</h1>
                        <p className="text-[18px]">Search thousands of movies, explore detailed information, and share your ratings with an interactive star-based system — all in one place.</p>
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

    export default Moviereview
