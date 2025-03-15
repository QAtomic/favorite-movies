import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { getPopularMovies, getMovies } from "../pages/api/ApiMovies";

  

export default function Content() {
    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch(err) {
                console.log(err);
                setError("Failed to load movies...");
            } finally {
                setLoading(false);
            }
        }

        loadPopularMovies();
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await getMovies(searchQuery);
            setMovies(searchResults);
            setError(null);
        } catch(err) {
            console.log(err);
            setError("Failed to search movies...");
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="home">
            <form className="search-form" onSubmit={handleSearch} >
                <input 
                    className="search-input" 
                    placeholder="Search for movies..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button" type="submit" >Search</button>
            </form>

            {error && <div className="error-message">Movies Not Available</div>}

            {loading ? ( 
                <div className="loading">Loading...</div>
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            )}
        </div>
    );
}