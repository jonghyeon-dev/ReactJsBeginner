import Proptypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./MovieDetails.module.css";
function Movie({id,coverImg,title,year,summary,genres}){
    return(
    <div className={styles.movie}>
        <img src={coverImg} alt={title} className={styles.movie__img}/>
        <h2 className={styles.movie__title}>
            { typeof id !== "undefined" ?
                <Link to={`${process.env.PUBLIC_URL}/movie/${id}`}>{title}</Link> :
                title
            }
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary}</p>
        <ul className={styles.movie__genres}>
            {genres.map((g,index)=>{
            return (<li key={index}>{g}</li>)
            })}
        </ul>
    </div>
    );
}

Movie.propTypes = {
    id:Proptypes.number,
    coverImg:Proptypes.string.isRequired,
    year:Proptypes.number.isRequired,
    title:Proptypes.string.isRequired,
    summary:Proptypes.string.isRequired,
    genres:Proptypes.arrayOf(Proptypes.string).isRequired,
}

export default Movie;