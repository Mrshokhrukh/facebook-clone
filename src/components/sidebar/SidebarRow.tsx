import React, { ReactNode } from "react";
import "./sidebarRow.scss";
import { Avatar } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../redux/sidebarSlice";
type SidebarRowProps = {
  src?: string;
  title: string;
  icon?: ReactNode;
  sidebar?: string;
};

const SidebarRow: React.FC<SidebarRowProps> = ({
  sidebar,
  src,
  icon,
  title,
}) => {
  let dispatch = useDispatch();
  return (
    <div className="sidebar_row">
      {src && <Avatar src={src} />}
      {sidebar && (
        <span className="sidebar_icon" onClick={() => dispatch(closeSidebar())}>
          {icon}
        </span>
      )}
      {!sidebar && icon && <span className="sidebar_icon">{icon}</span>}
      <h4>{title}</h4>
    </div>
  );
};
export default SidebarRow;
