import { useState, useEffect } from "react";
import Movie from './components/Movie';

function App() {
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState([]);
  const getMovies = async()=>{
    const json =await(await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")).json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(()=>{
    getMovies();
    // fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
    // .then((response)=>{
    //   return response.json();
    // }).then((json)=>{
    //   setMovies(json.data.movies);
    //   setLoading(prev=>!prev);
    // });
  },[]);
  console.log(movies);
  return (
    <div>
      <h1>Welcome Movie App</h1>
      { loading ? 
      <strong>Loading...</strong>
      : 
        <div>
          {movies.map((movie,index)=>{
            return(
              <Movie
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                url={movie.url}
              />
              // <div key={movie.id}>
              //   <img src={movie.medium_cover_image} alt="profile"/>
              //   <h2><a href={movie.url}>{index+1}: {movie.title}</a></h2>
              //   <p>{movie.summary}</p>
              //   <ul>
              //     {movie.genres.map((g,index)=>{
              //       return (<li key={index}>{g}</li>)
              //     })}
              //   </ul>
              // </div>
            )
          })}
        </div>
      }
    </div>
  );
}

export default App;