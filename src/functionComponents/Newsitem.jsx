import React from "react";

export default function Newsitem(props) {
  return (
    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
      <div className="card">
        <img
          src={props.Image} 
          height={200}
          className="card-img-top"
          alt="news"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <hr />
          <div className="source-date">
            <p>{props.source}</p>
            <p>{new Date(props.date).toLocaleDateString()}</p>
          </div>
          <p className="card-text">{props.description}</p>
          <a
            href={props.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Read More...
          </a>
        </div>
      </div>
    </div>
  );
}
