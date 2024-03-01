import React, { useState } from "react";
import ReactDOM from "react-dom/client";
//import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function TestConsumer() {
//     const [movieRating, setMovieRating] = useState(0);
//     return (
//         <>
//             <StarRating
//                 color="orange"
//                 maxRating={10}
//                 onSetRating={setMovieRating}
//             />
//             <p>This movies was rated {movieRating} stars</p>
//         </>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
        {/* <StarRating
            maxRating={7}
            messages={[
                "The Worst",
                "Bad",
                "Not Bad",
                "Good",
                "Very Good",
                "Amazing",
                "Extremely Amazing",
            ]}
        />
        <StarRating maxRating={6} size={30} color="green" defaultRating={1} />
        <StarRating
            maxRating={5}
            size={24}
            color="red"
            className="style-test-flexible"
            defaultRating={3}
        />
        <TestConsumer /> */}
    </React.StrictMode>
);
