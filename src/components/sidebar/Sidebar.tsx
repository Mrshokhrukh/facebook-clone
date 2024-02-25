import React from "react";
import "./sidebar.scss";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from "@mui/icons-material/EmojiFlags";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import PeopleIcon from "@mui/icons-material/People";
import ChatIcon from "@mui/icons-material/Chat";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../redux/sidebarSlice";
import { RootState } from "../../redux/store";
type SidebarProps = {};

const Sidebar: React.FC<SidebarProps> = () => {
  let dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.sidebar.isOpen);
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return (
    <>
      <div
        className={open ? `sidebar_opener_btn opening` : "sidebar_opener_btn"}
        onClick={() => dispatch(openSidebar())}
      >
        <span>
          <NavigateNextIcon />
        </span>
      </div>
      <div className={open ? `sidebar open` : "sidebar"}>
        <SidebarRow src={user?.user.photoURL} title={user?.user.displayName} />
        <SidebarRow title="COVID-19 Info center" icon={<LocalHospitalIcon />} />
        <SidebarRow title="Pages" icon={<EmojiFlagsIcon />} />
        <SidebarRow title="Friends" icon={<PeopleIcon />} />
        <SidebarRow title="Marketplace" icon={<StorefrontIcon />} />
        <SidebarRow title="Messanger" icon={<ChatIcon />} />
        <SidebarRow title="Videos" icon={<VideoLibraryIcon />} />
        <SidebarRow
          title=""
          sidebar="close"
          icon={open ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
        />
      </div>
    </>
  );
};
export default Sidebar;
