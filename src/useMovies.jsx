import { useState, useEffect } from "react";
const KEY = "9d42cc4b";

// named export best for Custom Hooks
export function useMovies(query) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(
        function () {
            //callback?.(); //handleCloseMovie();

            // browser API for cleaning data fetching
            const controller = new AbortController();

            // contains the side effect that registered here not to run as the component rendered. instead after it painted to the screen.
            async function fetchMovies() {
                try {
                    setIsLoading(true);
                    setError("");

                    const res = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
                        { signal: controller.signal }
                    );
                    if (!res.ok)
                        throw new Error(
                            "Something went wrong with fetching movies"
                        );

                    const data = await res.json();
                    if (data.Response === "False")
                        throw new Error("Movie not Found!");

                    setMovies(data.Search);
                    setError("");
                } catch (err) {
                    if (err.name !== "AbortError") {
                        console.log(err.message);
                        setError(err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }
            if (query.length < 3) {
                setMovies([]);
                setError("");
                return;
            }

            fetchMovies();

            return function () {
                controller.abort();
            };
        },
        [query]
    ); // [] empty array is dependency array
    return { movies, isLoading, error };
}
