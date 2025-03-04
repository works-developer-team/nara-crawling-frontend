import React from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  display: flex;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  flex: 1;
  padding: 12px;
  background: ${(props) => (props.active ? "#007bff" : "#f8f9fa")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s;

  &:hover {
    background: #0056b3;
    color: white;
  }
`;

const TabMenu = ({ activeTab, setActiveTab }) => {
  const tabs = ["발주계획", "사전규격", "입찰공고", "추적결과"];

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          active={activeTab === tab}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default TabMenu;
