import { useEffect } from "react";
import "./About.css";

export default function About() {
    useEffect(() => {
        document.title = "About | TV Tracker";
    }, []);

    return (
        <div className="about-container">
            <section className="about-hero">
                <h1>About TV Tracker</h1>
                <div className="about-idea">
                    <p>TV Tracker started out as an idea made in a google sheet. Since then, I started bringing more ideas into it. Then I started working on a custom formula that lets me rank all the series that I currently have in the sheet.</p>
                </div>
                <div className="about-idea">
                    <p>Then, I got the idea to develop this sheet into a website, which led me to creating this web app.</p>
                </div>
            </section>

            <section className="about-cards">
                <div className="about-card">
                    <h3>Purpose</h3>
                    <p>Enable users to manage their TV series effectively and stay updated.</p>
                </div>
                <div className="about-card">
                    <h3>Features</h3>
                    <p>Track episodes, calculate scores, explore production companies, and more.</p>
                </div>
                <div className="about-card">
                    <h3>Main use</h3>
                    <p>This website helps you track and rank TV series based on viewing progress and ratings.</p>
                </div>
            </section>
        </div>
    );
}
