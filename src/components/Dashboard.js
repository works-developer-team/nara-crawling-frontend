import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CrawlContext } from '../context/CrawlContext';
import StatusBar from './StatusBar';
import CrawlList from './CrawlList';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 12px 18px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.$primary ? '#007bff' : '#dc3545')};
  transition: background 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.$primary ? '#0056b3' : '#c82333')};
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const InfoButton = styled(Button)`
  background-color: #28a745;
  width: 100%;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }
`;


const Dashboard = () => {
  const navigate = useNavigate();
  const { startCrawling, stopCrawling, isCrawling, selectedItems } = useContext(CrawlContext);

  const isInfoButtonDisabled = Object.keys(selectedItems).length === 0; // 체크된 항목이 없으면 비활성화

  return (
    <Container>
      <Title>📊 입찰 공고 크롤링 대시보드</Title>
      <StatusBar />
      <ButtonContainer>
      <Button $primary onClick={startCrawling} disabled={isCrawling}>
        크롤링 시작
      </Button>
      <Button onClick={stopCrawling} disabled={!isCrawling}>
        크롤링 중지
      </Button>
      </ButtonContainer>
      <CrawlList />
      <InfoButton onClick={() => navigate('/info')} disabled={isInfoButtonDisabled}>
        정보 보내기
      </InfoButton>
    </Container>
  );
};

export default Dashboard;
