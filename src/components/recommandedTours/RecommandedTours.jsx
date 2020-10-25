import React from "react";
import Container from "@material-ui/core/Container/Container";
import RecommandedTourCard from "../card/RecommandedTourCard";
import "./recommandedTours.css";

function RecommandedTours() {
  return (
    <Container className="recommanded-tour-container">
      <h1>Recommaded Tours</h1>
      <div className="scrollable">
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images1.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images2.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images3.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images4.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images5.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images1.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images2.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images3.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images4.jpeg"}
          />
        </div>
        <div className="recommandedTours">
          <RecommandedTourCard
            className="card"
            imageUrl={process.env.PUBLIC_URL + "/images5.jpeg"}
          />
        </div>
      </div>
    </Container>
  );
}

export default RecommandedTours;
