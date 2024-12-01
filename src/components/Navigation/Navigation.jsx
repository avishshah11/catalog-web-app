import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  const [selectedTab, setSelectedTab] = useState("chart");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const getTabStyle = (tab) => {
    return {
      color: selectedTab === tab ? "#5c6bc0" : "black",
      fontWeight: selectedTab === tab ? "bold" : "normal",
      cursor: "pointer",
      marginRight: "20px",
      paddingBottom: selectedTab === tab ? "25px" : "",
      borderBottom: selectedTab === tab ? "3px solid #5c6bc0" : ""
    };
  };

  return (
    <div
      className="d-flex justify-content-start"
      style={{
        paddingBottom: "25px",
        marginBottom: "20px",
        borderBottom: "1px solid #f2f2f2",
      }}
    >
      <Nav>
        <span
          style={getTabStyle("summary")}
          onClick={() => handleTabClick("summary")}
        >
          Summary
        </span>
        <span
          style={getTabStyle("chart")}
          onClick={() => handleTabClick("chart")}
        >
          Chart
        </span>
        <span
          style={getTabStyle("statistics")}
          onClick={() => handleTabClick("statistics")}
        >
          Statistics
        </span>
        <span
          style={getTabStyle("analysis")}
          onClick={() => handleTabClick("analysis")}
        >
          Analysis
        </span>
        <span
          style={getTabStyle("settings")}
          onClick={() => handleTabClick("settings")}
        >
          Settings
        </span>
      </Nav>
    </div>
  );
};

export default Navigation;
