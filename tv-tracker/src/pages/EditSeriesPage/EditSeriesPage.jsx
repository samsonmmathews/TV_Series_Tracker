import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditSeriesPage.css";

export default function EditSeriesPage() {
  const { seriesID } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    series_id: "",
    title: "",
    company_id: "",
    release_year: "",
    total_episodes: "",
    imdb_rating: ""
  });

  useEffect(() => {
    const fetchSeries = async () => {
      try {
        const response = await axios.get("https://tv-series-tracker.onrender.com/admin/series/api/allSeries");
        const series = response.data.find(s => s._id === seriesID);
        if (!series) {
          alert("Series not found");
          navigate("/series");
        } else {
          setForm({
            series_id: series.series_id,
            title: series.title,
            company_id: series.company_id,
            release_year: series.release_year,
            total_episodes: series.total_episodes,
            imdb_rating: series.imdb_rating
          });
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSeries();
  }, [seriesID, navigate]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://tv-series-tracker.onrender.com/admin/series/api/updateSeries", {
        seriesID,
        watched_episodes: form.watched_episodes || 0,
        next_episode_rating: form.next_episode_rating || 0,
        ...form
      });
      navigate("/series");
    } catch (err) {
      console.error("Failed to update series:", err);
      alert("Failed to update series. Check console for details.");
    }
  };

  return (
    <div className="page-container edit-series-page">
      <h1>Edit Series</h1>
      <form className="series-form" onSubmit={handleSubmit}>
        {Object.keys(form).map((field) => (
          <input
            key={field}
            type={field === "imdb_rating" ? "number" : "text"}
            step={field === "imdb_rating" ? "0.1" : undefined}
            name={field}
            placeholder={field.replace("_", " ")}
            value={form[field]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit" className="form-btn">Update Series</button>
      </form>
    </div>
  );
}
