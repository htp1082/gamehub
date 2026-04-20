import React from "react";
import { useNavigate } from "react-router";

const Allgame = ({ allgame }) => {
  const navigate = useNavigate();
  const { title, coverPhoto, downloadLink, description, ratings, id } = allgame;
  return (
    <div>
       
      <div
        onClick={() => navigate(`/gameDetails/${id}`)}
        className="card bg-base-100 shadow-xl"
      >
        {/* Image */}
        <figure>
          <img
            src={coverPhoto}
            alt={title}
            className="h-48 w-full object-cover"
          />
        </figure>

        {/* Content */}
        <div className="card-body">
          {/* Title */}
          <h2 className="card-title">{title}</h2>

          {/* Description */}
          <p className="text-sm text-gray-500">{description}</p>

          {/* Rating */}
          <p className="text-yellow-500 font-semibold">⭐ {ratings} / 5</p>

          {/* Button */}
          <div className="card-actions justify-end mt-4">
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allgame;
