"use client";
import { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const addToFavorites = (product) => {
        if (!favorites.find((item) => item.id === product.id)) {
            setFavorites([...favorites, product]);
            showMessage("The product added to favorites");
        }
    };

    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter((item) => item.id !== id));
        showMessage("The product has removed from favorites");
    };

    const toggleFavorite = (product) => {
        if (favorites.find((item) => item.id === product.id)) {
            removeFromFavorites(product.id);
        } else {
            addToFavorites(product);
        }
    };

    const showMessage = (msg) => {
        setMessage(msg);
        setTimeout(() => setMessage(null), 2500);
    };

    return (
        <FavoritesContext.Provider
            value={{ favorites, addToFavorites, removeFromFavorites, toggleFavorite, message }}
        >
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
