import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const PDFViewer = styled.iframe`
  width: 80%;
  height: 800px;
  border: none;
  margin-bottom: 20px;
`;

const DownloadButton = styled.a`
  text-decoration: none;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  border-radius: 12px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const Resume = () => {
  return (
    <Container>
      <Title>My Resume</Title>
      <PDFViewer src="/resume.pdf" />
      <DownloadButton href="/resume.pdf" download>Download Resume</DownloadButton>
    </Container>
  );
};

export default Resume;