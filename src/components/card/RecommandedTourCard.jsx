import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./recommandedTourCard.css";

function RecommandedTourCard({ imageUrl }) {
  return (
    <div className="card-container">
      <Card className="card">
        <CardMedia
          className="card-img media"
          image={imageUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <button>Explore</button>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default RecommandedTourCard;
