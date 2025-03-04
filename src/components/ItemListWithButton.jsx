import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ItemCard = styled.div`
  background: #f8f9fa;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  &:hover {
    background: #e9f5ff;
    border-color: #007bff;
  }
`;

const ItemText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
`;

const Checkbox = styled.input`
  transform: scale(1.3);
  cursor: pointer;
`;

const TrackButton = styled.button`
  margin-top: 20px;
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ItemListWithButton = ({
  data,
  selectedItems,
  setSelectedItems,
  onTrack,
  showTrackButton,
  isTracking,
}) => {
  const handleCheckboxChange = (item) => {
    setSelectedItems((prev) => {
      const newItems = { ...prev };
      if (newItems[item.id]) {
        delete newItems[item.id];
      } else {
        newItems[item.id] = item;
      }
      return newItems;
    });
  };

  return (
    <div>
      <ListContainer>
        {data.length > 0 ? (
          data.map((item) => (
            <ItemCard key={item.id}>
              <ItemText>{item.name}</ItemText>
              <Checkbox
                type="checkbox"
                checked={!!selectedItems[item.id]}
                onChange={() => handleCheckboxChange(item)}
              />
            </ItemCard>
          ))
        ) : (
          <div>데이터가 없습니다.</div>
        )}
      </ListContainer>

      {showTrackButton && (
        <TrackButton onClick={onTrack} disabled={isTracking}>
          {isTracking ? "🔍 추적 중..." : "📥 추적하기"}
        </TrackButton>
      )}
    </div>
  );
};

export default ItemListWithButton;
