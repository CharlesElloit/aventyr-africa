import React from "react"
import Header from "../header/Header"
import Button from "@material-ui/core/Button"

import "./banner.css"
import Search from "../search/Search"

const Banner = ({ title, subtitle }) => {
  return (
    <div className="banner">
      <Header />
      <div className="banner-content">
        <div className="banner-title">
          <h1>{title}</h1>
        </div>
        <div />
        <p>{subtitle}</p>
        <Search />
        <Button className="banner-explore-nearby-btn">Explore nearby</Button>
      </div>
    </div>
  )
}

export default Banner
