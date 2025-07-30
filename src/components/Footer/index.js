import styled from 'styled-components';
import { Bio } from '../../data/constants';

const Container = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialMedia = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <SocialMedia>
          <SocialMediaIcon href={Bio.instagram} target="_blank">
            <i className="fab fa-instagram"></i>
          </SocialMediaIcon>
          <SocialMediaIcon href={`https://wa.me/${Bio.whatsapp}`} target="_blank">
            <i className="fab fa-whatsapp"></i>
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank">
            <i className="fab fa-linkedin"></i>
          </SocialMediaIcon>
        </SocialMedia>
        <Copyright>
          &copy; 2023 Tarun Patel. All rights reserved.
        </Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer;