import React from "react";
import "./header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import logo from "../../assets/facebook-logo-png-transparent-background.png";
import { Avatar, IconButton } from "@mui/material";
type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="head">
      <div className="header">
        <div className="header_left">
          <img src={logo} alt="" />
          <div className="head_search_field">
            <SearchIcon />
            <input type="text" placeholder="Search facebook" />
          </div>
        </div>
        <div className="header_middle">
          <div className="header_option nav-active">
            <HomeIcon fontSize="large" />
          </div>
          <div className="header_option">
            <AssistantPhotoIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SubscriptionsIcon fontSize="large" />
          </div>
          <div className="header_option">
            <StorefrontIcon fontSize="large" />
          </div>
          <div className="header_option">
            <SupervisedUserCircleIcon fontSize="large" />
          </div>
        </div>
        <div className="header_right">
          <div className="r_header_info">
            <Avatar src={user.user.photoURL} />
            <h4>{user.user.displayName}</h4>
          </div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Header;
