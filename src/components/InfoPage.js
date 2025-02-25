import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

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
  margin-bottom: 20px;
`;

const DataCard = styled.div`
  background: #e8f5e9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  border: 1px solid #c8e6c9;
`;

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
  display: flex;
  align-items: center;
`;

const Badge = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
  margin-right: 10px;
  background-color: #2e7d32;
  color: white;
`;

const DetailItem = styled.div`
  display: flex;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.div`
  width: 120px;
  font-weight: 600;
  color: #555;
`;

const DetailValue = styled.div`
  flex: 1;
`;

const BackButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const InfoPage = () => {
  const navigate = useNavigate();

  // 입찰공고 고정 데이터
  const bidAnnouncementData = [
    {
      '공고종류': "실공고(등록공고)",
      '공고일시': "2025/02/11 17:53:54",
      '입찰공고번호': "R25BK00632935",
      '참조번호': "재무과-0205",
      '공고명': "구례군-선짜군 우호교류 상징조형물 제작 설치",
      '공고기관': "전라남도 구례군",
      '수요기관': "전라남도 구례군",
      '계약방법': "일반경쟁",
      '입찰방법': "직찰",
      '낙찰방법': "협상에의한계약",
      '배정예산': "380,000,000",
      '파일': "3",
    },
    {
      '공고종류': "실공고(등록공고)",
      '공고일시': "2025/02/11 10:06:44",
      '입찰공고번호': "R25BK00631380",
      '참조번호': "서울특별시 재무공고 제2025-271호",
      '공고명': "광화문광장 UHPC화분 제작 및 설치사업",
      '공고기관': "서울특별시",
      '수요기관': "서울특별시",
      '계약방법': "제한경쟁",
      '입찰방법': "직찰",
      '낙찰방법': "적격심사제",
      '배정예산': "276,925,000",
      '파일': "6",
    },
    {
      '공고종류': "실공고(등록공고)",
      '공고일시': "2025/02/03 17:31:09",
      '입찰공고번호': "R25BK00612794",
      '참조번호': "강진군 공고 제2025-16-3호",
      '공고명': "가우도 빛의 숲 관광갤러리 조성 콘텐츠 구축사업(협상에의한 계약)",
      '공고기관': "전라남도 강진군",
      '수요기관': "전라남도 강진군",
      '계약방법': "일반경쟁",
      '입찰방법': "직찰",
      '낙찰방법': "협상에의한계약",
      '배정예산': "12,700,000,000",
      '파일': "3",
    }
  ];

  // 입찰공고 데이터의 주요 정보 렌더링
  const renderBidAnnouncementInfo = (item) => (
    <>
      <DetailItem>
        <DetailLabel>입찰공고번호</DetailLabel>
        <DetailValue>{item.입찰공고번호}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>참조번호</DetailLabel>
        <DetailValue>{item.참조번호}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>공고일시</DetailLabel>
        <DetailValue>{item.공고일시}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>공고기관</DetailLabel>
        <DetailValue>{item.공고기관}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>수요기관</DetailLabel>
        <DetailValue>{item.수요기관}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>계약방법</DetailLabel>
        <DetailValue>{item.계약방법}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>입찰방법</DetailLabel>
        <DetailValue>{item.입찰방법}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>낙찰방법</DetailLabel>
        <DetailValue>{item.낙찰방법}</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>배정예산</DetailLabel>
        <DetailValue>{item.배정예산}원</DetailValue>
      </DetailItem>
      <DetailItem>
        <DetailLabel>첨부파일</DetailLabel>
        <DetailValue>{item.파일}개</DetailValue>
      </DetailItem>
    </>
  );

  return (
    <Container>
      <Title>📋 입찰공고 정보</Title>
      
      {bidAnnouncementData.map((item, index) => (
        <DataCard key={index}>
          <CardTitle>
            <Badge>입찰공고</Badge>
            {item.공고명}
          </CardTitle>
          {renderBidAnnouncementInfo(item)}
        </DataCard>
      ))}
      
      <BackButton onClick={() => navigate('/')}>🔙 대시보드로 돌아가기</BackButton>
    </Container>
  );
};

export default InfoPage;