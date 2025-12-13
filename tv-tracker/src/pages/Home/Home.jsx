import { useEffect } from "react";
import "./Home.css";

export default function Home() {
	useEffect(() => {
		document.title = "Home | TV Tracker";
	}, []);

	return (
		<div className="home-container">
			<section className="hero-section">
				<h1>Welcome to TV Tracker</h1>
				<p>Track your favorite TV series and see rankings in real-time!</p>
			</section>

			<section className="features-section">
				<div className="feature-card">
					<h3>Track Your Progress</h3>
					<p>Keep tabs on your watched episodes and upcoming ratings.</p>
				</div>
				<div className="feature-card">
					<h3>Rank Series Easily</h3>
					<p>Get a calculated score for each series based on your viewing.</p>
				</div>
				<div className="feature-card">
					<h3>Explore Companies</h3>
					<p>Discover production companies behind your favorite shows.</p>
				</div>
			</section>
		</div>
	);
}
