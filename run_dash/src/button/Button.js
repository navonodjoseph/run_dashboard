// src/components/Button.js
import React from 'react';
import './Button.css'

const Button = ({ label, onClick }) => (
  <button className='button' onClick={onClick}>Simplify!</button>
);

export default Button;
