import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import Movie from "../components/Movie";
function Detail(){
    const [movie,setMovie] = useState({});
    const [loading,setLoading] = useState(true);
    const movieId = useParams().id;
    const getMovieDetail = async()=>{
        const json = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)).json();
        console.log(json.data.movie)
        setMovie(json.data.movie);
        setLoading(false);
    } 
    useEffect(()=>{
        getMovieDetail();
      },[]);
    return (
    <div>
        <h1>
            Detail
        </h1>
        { loading ? 
            <strong>Loading...</strong>:
            <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.large_cover_image}
                title={movie.title_long}
                summary={movie.description_full}
                genres={movie.genres}
            />
        }
        <Link to="/"><button>Back</button></Link>
    </div>
    );
}

export default Detail;