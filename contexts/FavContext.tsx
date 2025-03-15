import { createContext, useState, useEffect, useContext } from "react";

const FavContext = createContext<any>({});

export const useFavContext = () => useContext(FavContext);


export const FavProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) setFavorites(JSON.parse(storedFavs));
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]);
    }

    const removeFromFavorites = (movieID) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieID));
    }

    const isFavorite = (movieID) => {
        return favorites.some(movie => movie.id === movieID);
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <FavContext.Provider value={value}>{children}</FavContext.Provider>;
}