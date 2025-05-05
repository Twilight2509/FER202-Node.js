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

    // Hàm lấy tên đạo diễn dựa trên ID
    const getDirectorName = (directorId) => {
        const foundDirector = director.find((d) => d.id === directorId);
        return foundDirector ? foundDirector.name : "Unknown";
    };

    // Hàm lấy tên thể loại dựa trên ID
    const getGenreName = (genreId) => {
        const foundGenre = genre.find((g) => g.id === genreId);
        return foundGenre ? `${foundGenre.name.first_name} ${foundGenre.name.last_name}`.trim() : "Unknown";
    };

    return (
        <MovieContext.Provider
            value={{
                movie,
                setMovie,
                director,
                setDirector,
                genre,
                setGenre,
                getDirectorName, // Thêm hàm vào context
                getGenreName,   // Thêm hàm vào context
            }}
        >
            {children}
        </MovieContext.Provider>
    )
};

export default MovieProvider;