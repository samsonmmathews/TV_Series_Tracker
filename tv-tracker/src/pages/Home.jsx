import { useEffect } from "react";
import "./Home.css";

export default function Home() {
    useEffect(() => {
        document.title = "Home | TV Tracker";
    }, []);

    return (
        <div className="page-container">
            <h1 className="home-header">TV Tracker</h1>
            <p>Track your favorite TV series and see rankings in real-time!</p>
        </div>
    );
}
