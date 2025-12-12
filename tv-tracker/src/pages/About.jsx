import { useEffect } from "react";
import "./Home.css";

export default function About() {
    useEffect(() => {
        document.title = "About | TV Tracker";
    }, []);

    return (
        <div className="page-container">
            <h1 className="about-header">About TV Tracker</h1>
            <p>TV Tracker started out as an idea made in a google sheet. Since then, I started bringing more ideas into it. Then I started working on a custom formula that lets me rank all the series that I currently have in the sheet.</p>
            <p>Then, I got the idea to develop this sheet into a website.</p>
            <p>This website helps you track and rank TV series based on viewing progress and ratings.</p>
        </div>
    );
}
