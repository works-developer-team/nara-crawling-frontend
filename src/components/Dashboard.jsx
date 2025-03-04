import React, { useState } from "react";
import styled from "styled-components";
import { useQueries, useMutation } from "@tanstack/react-query";
import {
  fetchPlans,
  fetchSpecifications,
  fetchAnnouncements,
  trackSelectedItems,
} from "../api";
import ItemListWithButton from "./ItemListWithButton";
import TabMenu from "./Tabmenu";

const Container = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
`;

const Dashboard = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [trackedItems, setTrackedItems] = useState([]);
  const [activeTab, setActiveTab] = useState("발주계획");

  const queries = useQueries({
    queries: [
      { queryKey: ["plans"], queryFn: fetchPlans },
      { queryKey: ["specifications"], queryFn: fetchSpecifications },
      { queryKey: ["announcements"], queryFn: fetchAnnouncements },
    ],
  });

  const isLoading = queries.some((query) => query.isLoading);
  const [plans, specifications, announcements] = queries.map(
    (q) => q.data || []
  );

  const mutation = useMutation({
    mutationFn: trackSelectedItems,
    onSuccess: (tracked) => {
      setTrackedItems((prev) => [...prev, ...tracked]);
    },
  });

  const handleTrack = (type) => {
    const itemsToTrack = Object.values(selectedItems).filter(
      (item) => item.type === type
    );
    if (itemsToTrack.length > 0) {
      mutation.mutate(itemsToTrack);
    } else {
      alert("추적할 항목을 선택하세요!");
    }
  };

  const dataMap = {
    발주계획: plans,
    사전규격: specifications,
    입찰공고: announcements,
    추적결과: trackedItems,
  };

  if (isLoading) return <Container>📊 데이터 로딩 중...</Container>;

  return (
    <Container>
      <h2>📊 입찰 공고 크롤링 대시보드</h2>
      <TabMenu activeTab={activeTab} setActiveTab={setActiveTab} />

      <ItemListWithButton
        data={dataMap[activeTab] || []}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
        onTrack={() => handleTrack(activeTab)}
        showTrackButton={activeTab !== "추적결과"}
        isTracking={mutation.isLoading}
      />
    </Container>
  );
};

export default Dashboard;
