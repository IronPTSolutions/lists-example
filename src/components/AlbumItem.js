import React from 'react';

const AlbumItem = ({ name, description, img, onDelete }) => {
  return (
    <div className="Card card shadow-sm">
      <img src={`https://eu.ui-avatars.com/api/?name=${name.replace(' ', '+')}`} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <button onClick={onDelete} className="btn btn-outline-danger btn-sm">Delete</button>
      </div>
    </div>
  );
};

export default AlbumItem;