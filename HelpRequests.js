import React from "react";
import "./HelpRequests.css";

const HelpRequests = ({ isSideBarCollapsed }) => {
  return (
    <div
      className={`rightContentContainer2 ${
        isSideBarCollapsed ? "collapsedBody" : ""
      }`}
    >
      <div
        className={`helpReqContent ${
          isSideBarCollapsed ? "collapsedHelpReqContent" : ""
        }`}
      ></div>
    </div>
  );
};

export default HelpRequests;
