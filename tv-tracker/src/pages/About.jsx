import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "About | TV Tracker";
  }, []);

  return (
    <div className="page-container">
      <h1>About TV Tracker</h1>
      <p>This app helps you track and rank TV series based on viewing progress and ratings.</p>
    </div>
  );
}
