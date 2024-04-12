import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import styles from "./Detail.module.css";
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
        <div className={styles.container}>
            <h1>Movie Details</h1>
            { loading ? 
                <div className={styles.loader}>
                    <span>Loading...</span>
                </div>:
                <div className={styles.movies}>
                    <MovieDetails
                        coverImg={movie.large_cover_image}
                        title={movie.title_long}
                        year={movie.year}
                        summary={movie.description_full ==="" ? movie.title_long+ " No Description" : movie.description_full}
                        genres={movie.genres}
                    />
                    <Link to={`${process.env.PUBLIC_URL}/`}><button className={styles.btn}>Back</button></Link>
                </div>
            }
        </div>
    </div>
    );
}

export default Detail;