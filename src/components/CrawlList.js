import React, { useContext, useState } from 'react';
import { CrawlContext } from '../context/CrawlContext';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
`;

const ListItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  margin-bottom: 10px;
  overflow: hidden;
`;

const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
  background: #f8f9fa;
  border-bottom: ${(props) => (props.isOpen ? '1px solid #ddd' : 'none')};
`;

const DetailsContainer = styled.div`
  max-height: ${(props) => (props.isOpen ? '500px' : '0')};
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: max-height 0.3s ease, opacity 0.3s ease;
  padding: ${(props) => (props.isOpen ? '16px' : '0 16px')};
  background: #ffffff;
  color: #555;
  overflow: hidden;
`;

const DetailRow = styled.div`
  display: flex;
  margin-bottom: 8px;
  line-height: 1.5;
`;

const DetailLabel = styled.div`
  width: 130px;
  font-weight: 600;
  color: #444;
`;

const DetailValue = styled.div`
  flex: 1;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  background-color: ${(props) => 
    props.type === '발주' ? '#e3f2fd' : '#fff3e0'};
  color: ${(props) => 
    props.type === '발주' ? '#1565c0' : '#ef6c00'};
`;

const Checkbox = styled.input`
  transform: scale(1.3);
  cursor: pointer;
  margin-left: 10px;
`;

const CrawlList = () => {
  const { crawledData, selectedItems, setSelectedItems } = useContext(CrawlContext);
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleCheckbox = (id, item) => {
    setSelectedItems((prev) => {
      const newSelectedItems = { ...prev };
      if (newSelectedItems[id]) {
        delete newSelectedItems[id]; // 체크 해제 시 삭제
      } else {
        newSelectedItems[id] = item; // 체크 시 추가
      }
      return newSelectedItems;
    });
  };

  if (crawledData.length === 0) {
    return <p style={{ marginTop: '20px', textAlign: 'center' }}>크롤링된 데이터가 없습니다.</p>;
  }

  // 발주 데이터 필드
  const renderProcurementDetails = (item) => (
    <>
      <DetailRow>
        <DetailLabel>발주계획번호</DetailLabel>
        <DetailValue>{item.발주계획번호}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>발주기관</DetailLabel>
        <DetailValue>{item.발주기관}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>사업명</DetailLabel>
        <DetailValue>{item.사업명}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>공개일시</DetailLabel>
        <DetailValue>{item.공개일시}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>계약방법</DetailLabel>
        <DetailValue>{item.계약방법}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>품명</DetailLabel>
        <DetailValue>{item.품명}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>구매예정금액</DetailLabel>
        <DetailValue>{item.구매예정금액}원</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>담당자</DetailLabel>
        <DetailValue>{item.담당자} ({item.전화번호})</DetailValue>
      </DetailRow>
    </>
  );

  // 사전규격 데이터 필드
  const renderSpecificationDetails = (item) => (
    <>
      <DetailRow>
        <DetailLabel>사전규격등록번호</DetailLabel>
        <DetailValue>{item.사전규격등록번호}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>발주계획번호</DetailLabel>
        <DetailValue>{item.발주계획통합번호 || "-"}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>사전규격명</DetailLabel>
        <DetailValue>{item.사전규격명}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>수요기관</DetailLabel>
        <DetailValue>{item.수요기관}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>공고기관</DetailLabel>
        <DetailValue>{item.공고기관}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>배정예산금액</DetailLabel>
        <DetailValue>{item.배정예산금액}원</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>납품기한</DetailLabel>
        <DetailValue>{item.납품기한}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>공개일시</DetailLabel>
        <DetailValue>{item.사전규격공개일시}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>의견마감일시</DetailLabel>
        <DetailValue>{item.의견등록마감일시}</DetailValue>
      </DetailRow>
      <DetailRow>
        <DetailLabel>첨부파일</DetailLabel>
        <DetailValue>{item.파일 === "0" ? "없음" : `${item.파일}개`}</DetailValue>
      </DetailRow>
    </>
  );

  return (
    <ListContainer>
      {crawledData.map((item) => (
        <ListItem key={item.id}>
          <ItemHeader onClick={() => toggleItem(item.id)} isOpen={openItems[item.id]}>
            <div>
              <Badge type={item.type}>{item.type}</Badge>
              {item.type === '발주' ? item.사업명 : item.사전규격명}
            </div>
            <Checkbox
              type="checkbox"
              checked={!!selectedItems[item.id]}
              onChange={() => toggleCheckbox(item.id, item)}
              onClick={(e) => e.stopPropagation()} // 클릭 이벤트 전파 방지
            />
          </ItemHeader>
          <DetailsContainer isOpen={openItems[item.id]}>
            {item.type === '발주' 
              ? renderProcurementDetails(item) 
              : renderSpecificationDetails(item)}
          </DetailsContainer>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default CrawlList;