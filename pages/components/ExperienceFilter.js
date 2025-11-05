"use client";
import { useState } from "react";

export default function ExperienceFilter({ onFilterChange }) {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "EDUCATION", "PROFESSIONAL EXPERIENCE"];

  const handleClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="experience-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
