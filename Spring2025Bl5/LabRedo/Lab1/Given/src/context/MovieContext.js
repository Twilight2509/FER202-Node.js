import React, {createContext, useState, useEffect, Children} from 'react';
import axios from "axios";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [movie, setMovie] = useState([]);
    const [director, setDirector] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieRes = await axios.get("http://localhost:9999/movies");
                setMovie(movieRes.data);

                const directorRes = await axios.get("http://localhost:9999/directors");
                setDirector(directorRes.data);

                const genreRes = await axios.get("http://localhost:9999/genres");
                setGenre(genreRes.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);
    return (
        <MovieContext.Provider
            value={{
                movie,
                setMovie,
                director,
                setDirector,
                genre,
                setGenre,
            }}
        >
            {children}
        </MovieContext.Provider>
    )
};

export default MovieProvider;