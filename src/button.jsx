import React from 'react'

export default function Button({text, handleClick}) {
const Button = ({ text, handleClick, disabled = false }) => {
  return (
    <a href="#" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4" onClick={handleClick}>
      <span className="pl1">{text}</span>
    </a>
  )
}
    <button
      className="f6 link dim br2 ph3 pv2 mb2 dib white bg-blue bn"
      onClick={handleClick}
      disabled={disabled}
      style={{
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
 54 changes: 33 additions & 21 deletions54  
src/components/Card.jsx
Original file line number	Diff line number	Diff line change
@@ -1,27 +1,39 @@
import React from "react";
import { Link } from "react-router-dom";

const Card = ({description, alt_description, id, user, urls, likes}) => {
const Card = ({ product }) => {
  // Extract data from the product object
  const imageUrl = product.urls?.small || product.urls?.regular || "https://picsum.photos/400/300";
  const title = product.description || product.alt_description || "Untitled";
  const artist = product.user?.name || "Unknown Artist";
  const likes = product.likes || 0;
  const tags = product.tags?.map(tag => tag.title).slice(0, 3) || [];

  const style = {
    backgroundImage: `url(${urls.small})`
  }

  return (
    <div className="fl w-50 w-25-m w-20-l pa2">
      <Link to={`/product/${id}`} className="db link dim tc"> 
        <div style={style} alt="" className="w-100 db outline black-10 h4 cover"></div>
        <dl className="mt2 f6 lh-copy">
          <dt className="clip">Title</dt>
          <dd className="ml0 black truncate w-100">{description ?? alt_description}</dd>
          <dt className="clip">Artist</dt>
          <dd className="ml0 gray truncate w-100">{user.first_name} {user.last_name}</dd>
          <dt className="clip">Likes</dt>
          <dd className="ml0 gray truncate w-100">{likes} Likes</dd>
        </dl>
      </Link>
    </div>
  )
}
    <Link to={`/product/${product.id}`} className="no-underline">
      <div className="ba b--light-silver br3 ma3 pa3 shadow-1 bg-white" style={{ width: "280px", cursor: "pointer" }}>
        <img
          src={imageUrl}
          alt={title}
          className="w-100 br2"
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="pa2">
          <h3 className="f5 mt2 mb1 dark-gray truncate">{title}</h3>
          <p className="f6 gray mb1">by {artist}</p>
          <p className="f6 red b">❤️ {likes.toLocaleString()} likes</p>
          {tags.length > 0 && (
            <div className="flex flex-wrap mt2">
              {tags.map((tag, idx) => (
                <span key={idx} className="bg-light-gray br-pill ph2 pv1 f7 mr1 mb1">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};