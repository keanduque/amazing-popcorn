import { useEffect } from "react";

export function useKey(key, action) {
    // useEffect for add addEventListener for keydown Escape
    useEffect(
        function () {
            function callback(e) {
                if (e.code.toLowerCase() === key.toLowerCase()) {
                    action();
                }
            }
            // add eventlistener everytime hitting escape key
            document.addEventListener("keydown", callback);

            // cleaning up event listener for useEffect rendering
            return function () {
                document.removeEventListener("keydown", callback);
            };
        },
        [key, action]
    );
}
