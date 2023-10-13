// src/components/InfoBox.js
import React from 'react';
import './InfoBox.css'; // Import the CSS file for styling

const InfoBox = ({ title, data }) => (
  <div className="info-box">
    <div className="box-content">
      <div className="title">{title}</div>
      <div className="data">{data}</div>
    </div>
  </div>
);

export default InfoBox;
