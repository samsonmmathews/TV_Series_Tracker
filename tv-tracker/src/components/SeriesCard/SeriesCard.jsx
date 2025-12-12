import { useState } from "react";
import { Link } from "react-router-dom";
import "./SeriesCard.css";

export default function SeriesCard({ series, onUpdate, onDelete }) {
    const [watchedEpisodes, setWatchedEpisodes] = useState(series.watched_episodes || 0);
    const [nextRating, setNextRating] = useState(series.next_episode_rating || 0);

    const progress = (watchedEpisodes / series.total_episodes) * 100;
    const score = (progress + series.imdb_rating * 10 + nextRating * 10) / 3;
    const scoreValue = score.toFixed(2);

    let scoreClass = "score-neutral";
    if (score >= 70) {
        scoreClass = "score-good";
    }
    else if (score >= 40 && score < 70) {
        scoreClass = "score-mid";
    }
    else {
        scoreClass = "score-low";
    }

    const handleEpisodesChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= series.total_episodes) {
            setWatchedEpisodes(value);
            onUpdate(series._id, { watched_episodes: value, next_episode_rating: nextRating });
        }
    };

    const handleRatingChange = (e) => {
        const value = Number(e.target.value);
        if (value >= 0 && value <= 10) {
            setNextRating(value);
            onUpdate(series._id, { watched_episodes: watchedEpisodes, next_episode_rating: value });
        }
    };

    const confirmAndDelete = () => {
        if (!onDelete) return;
        const ok = window.confirm(`Delete "${series.title}"? This cannot be undone.`);
        if (ok) onDelete(series._id);
    };

    return (
        <div className="series-card">
            <div className="series-card-header">
                <h4 className="series-title">{series.title}</h4>
                <p className="series-meta">
                    IMDB: {series.imdb_rating} | Episodes: {series.total_episodes}
                </p>
            </div>

            <hr className="series-divider" />

            <div className="series-card-body">
                <div className="input-group">
                    <label className="input-label">Watched Episodes</label>
                    <input type="number" className="series-input" value={watchedEpisodes} min="0" max={series.total_episodes} onChange={handleEpisodesChange} />
                </div>

                <div className="input-group">
                    <label className="input-label">Next Episode Rating</label>
                    <input type="number" className="series-input" value={nextRating} min="0" max="10" step="0.1" onChange={handleRatingChange} />
                </div>

                <div className="progress-container">
                    <div className="progress-bar" style={{ width: progress + "%" }}></div>
                </div>

                <div className={`series-score ${scoreClass}`}>Score: {scoreValue}</div>

                
                <Link to={`/series/edit/${series._id}`}>
                    <button className="edit-btn">Edit</button>
                </Link>

                <div className="delete-btn-container">
                    <button className="delete-btn" onClick={confirmAndDelete} title={`Delete ${series.title}`} type="button">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
