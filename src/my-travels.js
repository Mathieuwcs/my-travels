import React from "react";

const mytravels = ({ country, destination, photo, distance }) => (
  <figure>
    <img
      src={photo}
      alt= "ville"
    /> 
    <figcaption>
      <blockquote>
        {country}
      </blockquote>
      <cite>{destination}</cite>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

export default mytravels;