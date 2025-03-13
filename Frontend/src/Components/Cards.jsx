import React from "react";
import './Styles/Cards.scss';
import CarCard from './assets/Images/CarCard.jpg';
import { Button } from "react-bootstrap";

export default function CardSection() {
  return (
    <div className="container">
      <div className="horizontal-card">
        <img src={CarCard} alt="Sample" className="card-img" />
        <div className="card-content">
          <h2 className="font-integral">Goodyear’s Authorized</h2>
          <p>4 Wheeler Tyre Dealer</p>
          <Button className="explore-btn">Explore</Button>
        </div>
      </div>
    </div>
  );
}
