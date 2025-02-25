import React, { useContext } from 'react';
import { CrawlContext } from '../context/CrawlContext';
import styled from 'styled-components';

const StatusContainer = styled.div`
  margin-top: 10px;
  padding: 10px;
  border-radius: 4px;
  background-color: ${(props) => (props.active ? '#e6f7ff' : '#fffbe6')};
  border: 1px solid #ccc;
  text-align: center;
  font-weight: bold;
`;

const StatusBar = () => {
  const { isCrawling } = useContext(CrawlContext);

  return (
    <StatusContainer active={isCrawling}>
      현재 상태: {isCrawling ? '진행 중' : '정지'}
    </StatusContainer>
  );
};

export default StatusBar;
