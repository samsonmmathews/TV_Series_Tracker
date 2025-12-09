import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home | TV Tracker";
  }, []);

  return (
    <div className="page-container">
      <h1>Welcome to TV Tracker</h1>
      <p>Track your favorite TV series and see rankings in real-time!</p>
    </div>
  );
}
