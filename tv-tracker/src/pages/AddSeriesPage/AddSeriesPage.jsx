import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddSeriesPage.css";

export default function AddSeriesPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        series_id: "",
        title: "",
        company_id: "",
        release_year: "",
        total_episodes: "",
        imdb_rating: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://tv-series-tracker.onrender.com/admin/series/api/addSeries", form);
            navigate("/series");
        } catch (err) {
            console.error("Failed to add series:", err);
            alert("Failed to add series. Check console for details.");
        }
    };

    return (
        <div className="page-container add-series-page">
            <h1>Add New Series</h1>
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
                <button type="submit" className="form-btn">Add Series</button>
            </form>
        </div>
    );
}
