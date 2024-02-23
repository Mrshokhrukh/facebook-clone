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
            <HomeIcon className="head_icon" />
          </div>
          <div className="header_option">
            <AssistantPhotoIcon className="head_icon" />
          </div>
          <div className="header_option">
            <SubscriptionsIcon className="head_icon" />
          </div>
          <div className="header_option">
            <StorefrontIcon className="head_icon" />
          </div>
          <div className="header_option">
            <SupervisedUserCircleIcon className="head_icon" />
          </div>
        </div>
        <div className="header_right">
          <div className="r_header_info">
            <Avatar src={user?.user.photoURL} />
            <h4>{user?.user.displayName}</h4>
          </div>
          <IconButton className="r_h_icons">
            <AddIcon />
          </IconButton>
          <IconButton className="r_h_icons">
            <ForumIcon />
          </IconButton>
          <IconButton className="r_h_icons">
            <NotificationsActiveIcon />
          </IconButton>
          <IconButton className="r_h_icons">
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
export default Header;
