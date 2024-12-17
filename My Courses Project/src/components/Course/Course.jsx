import React from 'react';
import './Course.css';


function Course({ course }) {
  // Destructuring kullanarak kurs nesnesinden veriler çekilir.
  const { title, description, price, link, image } = course;

  return (
    <a href={link} className='course-card' target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="course-image" />
      <div className="course-info">
        <h4>{title}</h4>
        <p>{description}</p>
        <h3>${price}</h3>
      </div>
    </a>
  );
}

export default Course;
