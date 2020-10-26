import React from "react"
import HomeIcon from "@material-ui/icons/Home"
import UserIcon from "@material-ui/icons/AccountCircle"
import IconButton from "@material-ui/core/IconButton"
import SearchIcon from "@material-ui/icons/Search"
import NotificationIcon from "@material-ui/icons/Notifications"

import "./bottomNavigation.css"

const styles = {
  button: {
    fontSize: 30
  }
}

function ButtomNavigation() {
  return (
    <div className="bottom-navigation">
      <div className="bottom-navigation-icons">
        <div className="bottom-navigation-home-icon">
          <IconButton>
            <HomeIcon className="home-icon" style={styles.button} />
          </IconButton>
        </div>

        <div className="bottom-navigation-search-icon">
          <SearchIcon style={styles.button} className="search-icon" />
        </div>

        <div className="bottom-navigation-notification-icon">
          <IconButton>
            <NotificationIcon className="notification-icon" style={styles.button} />
          </IconButton>
        </div>

        <div className="bottom-navigation-user-icon">
          <IconButton>
            <UserIcon className="user-icon" style={styles.button} />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default ButtomNavigation
