import { useEffect, useState } from "react";
import axios from "axios";
import SeriesCard from "../SeriesCard/SeriesCard";
import "./SeriesList.css";

export default function SeriesList() {
  const [series, setSeries] = useState([]);
  const [sort, setSort] = useState("none");

  useEffect(() => {
    document.title = "Series | TV Tracker";

    async function fetchSeries() {
      try {
        const response = await axios.get("http://localhost:8888/admin/series/api/allSeries");
        setSeries(response.data);
      } catch (err) {
        console.error("Error fetching series:", err);
      }
    };
    fetchSeries();
  }, []);

  const calculateScore = (s) => {
    const watched = s.watched_episodes || 0;
    const nextRating = s.next_episode_rating || 0;

    return (
      (watched / s.total_episodes) * 100 +
      s.imdb_rating * 10 +
      nextRating * 10
    ) / 3;
  };

  const handleSortHighToLow = () => {
    setSort("desc");
    setSeries((prev) =>
      [...prev].sort((a, b) => calculateScore(b) - calculateScore(a))
    );
  };

  const handleUpdate = async (seriesID, updatedFields) => {
    try {
      await axios.post(
        "http://localhost:8888/admin/series/api/updateSeries",
        {
          seriesID: seriesID,
          watched_episodes: updatedFields.watched_episodes,
          next_episode_rating: updatedFields.next_episode_rating
        }
      );

      setSeries((prev) =>
        prev.map((s) =>
          s._id === seriesID ? { ...s, ...updatedFields } : s
        )
      );
    } catch (err) {
      console.error("Update error:", err);
    }
  };


  return (
    <div className="page-container">
      <div className="series-header">
        <h1 className="series-page-title">TV Series Tracker</h1>
        <button className="sort-btn" onClick={handleSortHighToLow}>
          Sort by Score
        </button>
      </div>
      
      <div className="series-grid">
        {series.map((s) => (<SeriesCard key={s._id} series={s} onUpdate={handleUpdate} />))}
      </div>
    </div>
  );
}
