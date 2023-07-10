import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

// Import icons
import arrowIcon from "../../../assets/Icons/arrowLeft.png";
import hlpReqIcon from "../../../assets/Icons/TeacherDashboard/helpRequests.png";
import activeHelpReq from "../../../assets/Icons/TeacherDashboard/helpRequestsSelected.png";
import logoutIcon from "../../../assets/Icons/logout.png";
import profileIcon from "../../../assets/Icons/profile.png";
import progressIcon from "../../../assets/Icons/TeacherDashboard/progressTracker.png";
import activeProgIcon from "../../../assets/Icons/TeacherDashboard/progressTrackerSelected.png";
import projLibraryIcon from "../../../assets/Icons/TeacherDashboard/projectLibrary.png";
import activeProjLib from "../../../assets/Icons/TeacherDashboard/projectLibrarySelected.png";
import projSubmissionIcon from "../../../assets/Icons/TeacherDashboard/projectSubmissions.png";
import activeProjSub from "../../../assets/Icons/TeacherDashboard/projectSubmissionsSelected.png";
import settingsIcon from "../../../assets/Icons/settings.png";
import studentProfileIcon from "../../../assets/Icons/TeacherDashboard/studentProfiles.png";
import activeStudProf from "../../../assets/Icons/TeacherDashboard/studentProfilesSelected.png";

// Import images
import teacherPic from "../../../assets/publicImages/teachers/JasminaSalvador.png";

import HelpRequests from "./HelpRequests";
import ProgressTracker from "./ProgressTracker";
import StudentsProfiles from "./StudentsProfiles";
import ProjectSubmissions from "./ProjectSubmissions";
import ProjectLibrary from "./ProjectLibrary";

const HRSidebar = () => {
  const [showContent, setShowContent] = useState({
    comp: <HelpRequests />,
    name: "help-requests",
  });

  const [isProgressActive, setIsProgressActive] = useState(false);
  const [isStudProfActive, setIsStudProfActive] = useState(false);
  const [isHelpReqActive, setIsHelpReqActive] = useState(true);
  const [isProjSubActive, setIsProjSubActive] = useState(false);
  const [isProjLibActive, setIsProjLibActive] = useState(false);
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);

  useEffect(() => {
    // Update active states based on displayed content
    if (showContent.name === "progress-tracker") {
      setIsProgressActive(true); // Set Progress Tracker as active
      setIsStudProfActive(false);
      setIsHelpReqActive(false);
      setIsProjSubActive(false);
      setIsProjLibActive(false);
    } else if (showContent.name === "student-profiles") {
      setIsProgressActive(false);
      setIsStudProfActive(true); // Set Student Profiles as active
      setIsHelpReqActive(false);
      setIsProjSubActive(false);
      setIsProjLibActive(false);
    } else if (showContent.name === "help-requests") {
      setIsProgressActive(false);
      setIsStudProfActive(false);
      setIsHelpReqActive(true); // Set Help Requests as active
      setIsProjSubActive(false);
      setIsProjLibActive(false);
    } else if (showContent.name === "project-submissions") {
      setIsProgressActive(false);
      setIsStudProfActive(false);
      setIsHelpReqActive(false);
      setIsProjSubActive(true); // Set Project Submissions as active
      setIsProjLibActive(false);
    } else if (showContent.name === "project-library") {
      setIsProgressActive(false);
      setIsStudProfActive(false);
      setIsHelpReqActive(false);
      setIsProjSubActive(false);
      setIsProjLibActive(true); // Set Project Library as active
    }
  }, [showContent.name]);

  const handleClickBtn = (buttonID) => {
    //updated displayed content based on the click of the button
    switch (buttonID) {
      case "progress-tracker":
        setShowContent({
          comp: <ProgressTracker />,
          name: "progress-tracker",
        });
        break;
      case "student-profiles":
        setShowContent({
          comp: <StudentsProfiles />,
          name: "student-profiles",
        });
        break;
      case "help-requests":
        setShowContent({
          comp: <HelpRequests />,
          name: "help-requests",
        });
        break;
      case "project-submissions":
        setShowContent({
          comp: <ProjectSubmissions />,
          name: "project-submissions",
        });
        break;
      case "project-library":
        setShowContent({
          comp: <ProjectLibrary />,
          name: "project-library",
        });
        break;
      default:
        break;
    }
  };

  const handleCollapse = () => {
    // Toggle the sidebar collapse state
    setIsSideBarCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={`bodyContainer2 ${isSideBarCollapsed ? "collapsedBody" : ""}`}
    >
      <div
        className={`sidebarContainer ${
          isSideBarCollapsed ? "collapsedSidebar" : ""
        }`}
      >
        <img className="teachAvatar" src={teacherPic} alt="teacherphoto" />

        <div className="btnsContainer">
          <ul>
            <li
              className={`${
                showContent.name === "progress-tracker" && "active"
              }`}
              id="progress-tracker"
              onClick={() => handleClickBtn("progress-tracker")}
            >
              <img
                className={`sidebarIcons ${
                  isSideBarCollapsed ? "collapsedIcons" : ""
                }`}
                src={isProgressActive ? activeProgIcon : progressIcon}
                alt="progressBtnIcon"
              />
              <Link
                className={`iconText ${
                  isSideBarCollapsed ? "collapsedText" : ""
                }`}
                to="/progresstracker"
              >
                Progress Tracker
              </Link>
            </li>
            <li
              className={`${
                showContent.name === "student-profiles" && "active"
              }`}
              id="student-profile"
              onClick={() => handleClickBtn("student-profiles")}
            >
              <img
                className={`sidebarIcons ${
                  isSideBarCollapsed ? "collapsedIcons" : ""
                }`}
                src={isStudProfActive ? activeStudProf : studentProfileIcon}
                alt="studentProfileBtnIcon"
              />
              <Link
                className={`iconText ${
                  isSideBarCollapsed ? "collapsedText" : ""
                }`}
                to="/studentprofiles"
              >
                Student Profile
              </Link>
            </li>
            <li
              className={`${showContent.name === "help-requests" && "active"}`}
              id="help-requests"
              onClick={() => handleClickBtn("help-requests")}
            >
              <img
                className={`sidebarIcons ${
                  isSideBarCollapsed ? "collapsedIcons" : ""
                }`}
                src={isHelpReqActive ? activeHelpReq : hlpReqIcon}
                alt="helpReqBtnIcon"
              />
              <Link
                className={`iconText ${
                  isSideBarCollapsed ? "collapsedText" : ""
                }`}
                to="helprequests"
              >
                Help Requests
              </Link>
            </li>
            <li
              className={`${
                showContent.name === "project-submissions" && "active"
              }`}
              id="project-submissions"
              onClick={() => handleClickBtn("project-submissions")}
            >
              <img
                className={`sidebarIcons ${
                  isSideBarCollapsed ? "collapsedIcons" : ""
                }`}
                src={isProjSubActive ? activeProjSub : projSubmissionIcon}
                alt="projSubmissionBtnIcon"
              />
              <Link
                className={`iconText ${
                  isSideBarCollapsed ? "collapsedText" : ""
                }`}
                to="projectsubmissions"
              >
                Project Submissions
              </Link>
            </li>
            <li
              className={`${
                showContent.name === "project-library" && "active"
              }`}
              id="project-library"
              onClick={() => handleClickBtn("project-library")}
            >
              <img
                className={`sidebarIcons ${
                  isSideBarCollapsed ? "collapsedIcons" : ""
                }`}
                src={isProjLibActive ? activeProjLib : projLibraryIcon}
                alt="projLibraryBtnIcon"
              />
              <Link
                className={`iconText ${
                  isSideBarCollapsed ? "collapsedText" : ""
                }`}
                to="projectlibrary"
              >
                Project Library
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={`arrowContainer ${
            isSideBarCollapsed ? "collapsedArrowContainer" : ""
          }`}
          onClick={handleCollapse}
        >
          <img
            className={`arrowIcon ${
              isSideBarCollapsed ? "collapsedArrowIcon" : ""
            }`}
            src={arrowIcon}
            alt="arrow icon"
          ></img>
        </div>
        <div
          className={`btmIconsContainer ${
            isSideBarCollapsed ? "collapsedBtmIconContainer" : ""
          }`}
        >
          <div className="btmIconGroups">
            <img
              className={`btmIcons ${
                isSideBarCollapsed ? "collapsedBtmIcons" : ""
              }`}
              src={profileIcon}
              alt="profile icon"
            />
            <span
              className={`iconTexts ${
                isSideBarCollapsed ? "collapsedText" : ""
              }`}
            >
              Proflle
            </span>
          </div>
          <div className="btmIconGroups">
            <img
              className={`btmIcons ${
                isSideBarCollapsed ? "collapsedBtmIcons" : ""
              }`}
              src={settingsIcon}
              alt="settings icon"
            />
            <span
              className={`iconTexts ${
                isSideBarCollapsed ? "collapsedText" : ""
              }`}
            >
              Settings
            </span>
          </div>
          <div className="btmIconGroups">
            <img
              className={`btmIcons ${
                isSideBarCollapsed ? "collapsedBtmIcons" : ""
              }`}
              src={logoutIcon}
              alt="logout icon"
            />
            <span
              className={`iconTexts ${
                isSideBarCollapsed ? "collapsedText" : ""
              }`}
            >
              Logout
            </span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default HRSidebar;
