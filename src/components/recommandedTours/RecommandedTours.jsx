import React from "react"
import data from "../../data"
import Container from "@material-ui/core/Container/Container"
import RecommandedTourCard from "../card/RecommandedTourCard"

import "./recommandedTours.css"

function RecommandedTours() {
  return (
    <Container className="recommanded-tour-container">
      <h1>Recommaded Tours</h1>
      <div className="scrollable">
        {data.map((tour) => (
          <div key={tour.id} className="recommandedTours">
            <RecommandedTourCard
              className="card"
              imageUrl={process.env.PUBLIC_URL + "/rano.jpg"}
              title={tour.title}
              descripttion={tour.description}
              ratings={tour.rating}
            />
          </div>
        ))}
      </div>
    </Container>
  )
}

export default RecommandedTours
