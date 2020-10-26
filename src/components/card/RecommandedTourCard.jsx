import React from "react"
import "./recommandedTourCard.css"
import { Link } from "react-router-dom"
import Card from "@material-ui/core/Card"
import StarIcon from "@material-ui/icons/Star"
import CardMedia from "@material-ui/core/CardMedia"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import StarFilledIcon from "@material-ui/icons/StarHalfOutlined"

function RecommandedTourCard(props) {
  const { imageUrl, title, descripttion, ratings } = props

  return (
    <div className="card-container">
      <Card className="card">
        <Link to="/explore">
          <CardMedia className="card-img media" image={imageUrl} title={title} />
        </Link>
      </Card>
      <div className="card-info">
        <h1>{title}</h1>
        <div className="rating">
          <p>
            <StarIcon className="fullStar ratings" />
            <StarFilledIcon className="ratings" />
            <StarBorderIcon className="ratings" /> {ratings}
          </p>
        </div>
        <Link to="/explore">Explore more</Link>
        <p>{descripttion}</p>
      </div>
    </div>
  )
}

export default RecommandedTourCard
