import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
    const [value, setValue] = useState(function () {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialState;
    });

    // storing using useEffect - can effectively synchronize with the local storage
    //local storage - key value pair storage available in the browser, store data per domain
    // need to use JSON.stringify to convert to string. in local storage it can only store for key value pairs which are the values are string.
    useEffect(
        function () {
            // no need to create new array because it can updated watched become new state on mount
            localStorage.setItem("watched", JSON.stringify(value));
        },
        [value, key]
    );

    return [value, setValue];
}
