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

const EmptyMessage = styled.div`
  padding: 20px;
  text-align: center;
  color: #888;
`;

const ItemList = ({ data, selectedItems, setSelectedItems, isTrackingTab }) => {
  if (data.length === 0) {
    return (
      <EmptyMessage>
        {isTrackingTab ? "추적한 항목이 없습니다." : "데이터가 없습니다."}
      </EmptyMessage>
    );
  }

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
    <ListContainer>
      {data.map((item) => (
        <ItemCard key={item.id}>
          <ItemText>{item.name || item.공고명}</ItemText>
          <Checkbox
            type="checkbox"
            checked={!!selectedItems[item.id]}
            onChange={() => handleCheckboxChange(item)}
          />
        </ItemCard>
      ))}
    </ListContainer>
  );
};

export default ItemList;
