import React from "react";
import "./sidebar.scss";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <div className="sidebar">
      <SidebarRow src={user?.user.photoURL} title={user?.user.displayName} />
      <SidebarRow title="COVID-19 Info center" icon={<LocalHospitalIcon />} />
      <SidebarRow title="Pages" icon={<EmojiFlagsIcon />} />
      <SidebarRow title="Friends" icon={<PeopleIcon />} />
      <SidebarRow title="Marketplace" icon={<StorefrontIcon />} />
      <SidebarRow title="Messanger" icon={<ChatIcon />} />
      <SidebarRow title="Videos" icon={<VideoLibraryIcon />} />
      <SidebarRow title="Marketplace" icon={<ExpandMoreIcon />} />
    </div>
  );
};
export default Sidebar;
