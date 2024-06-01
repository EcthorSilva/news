import React from "react";

const Card = ({ title, link, magnetLink, postDate, imageUrl }) => {
  return (
    <main className="container pt-0 d-flex align-content-center flex-column">
      <div className="card d-flex flex-row">
        <img
          src={imageUrl}
          className="card-img-left"
          alt="..."
        />
        <div className="card-body">
          <h6 className="card-title">{title}</h6>
          <div className="pt-3 pb-3">
            <a href={link} className="btn btn-primary me-2">
              Ver
            </a>
            <a href={magnetLink} className="btn btn-outline-primary">
              Download
            </a>
          </div>
          <p className="text-muted mb-0">{postDate}</p>
        </div>
      </div>
      <hr />
    </main>
  );
};

export default Card;