import { useEffect, useState } from "react";
import axios from "axios";
import './CompaniesList.css'

export default function CompaniesList() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        document.title = "Companies | TV Tracker";

        const fetchCompanies = async () => {
            try {
                const response = await axios.get("http://localhost:8888/admin/companies/api/allCompanies");
                setCompanies(response.data);
            } catch (err) {
                console.error("Error fetching companies:", err);
            }
        };

        fetchCompanies();
    }, []);

    return (
        <div className="page-container">
            <h1>Production Companies</h1>
            {companies.length === 0 ? (
                <p>No companies found.</p>
            ) : (
                <ul className="list-group">
                    {companies.map(c => (
                        <li key={c._id} className="list-group-item">
                            {c.name} <span className="companyID">(ID: {c.company_id})</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
