import React, { ReactNode } from "react";
import "./sidebarRow.scss";
import { Avatar } from "@mui/material";
type SidebarRowProps = {
  src?: string;
  title: string;
  icon?: ReactNode;
};

const SidebarRow: React.FC<SidebarRowProps> = ({ src, icon, title }) => {
  return (
    <div className="sidebar_row">
      {src && <Avatar src={src} />}
      {icon && <span>{icon}</span>}
      <h4>{title}</h4>
    </div>
  );
};
export default SidebarRow;
