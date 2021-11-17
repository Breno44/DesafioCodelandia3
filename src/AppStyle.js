import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bgSite};
  display: flex;
  justify-content: center;
`;

export const MainHeaderContainer = styled.div`
  width: 1440px;
  height: 600px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 1200px;
  }

  @media (min-width: 340px) and (max-width: 768px) {
    width: 360px;
    flex-direction: column;
    margin: 50px 0;
  }
`;

export const HeaderContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 340px) and (max-width: 768px) {
    width: 340px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: normal;
  width: 300px;
  margin-bottom: 20px;

  @media (min-width: 340px) and (max-width: 768px) {
    font-size: 28px;
  }
`;

export const HeaderText = styled.p`
  width: 300px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: normal;
  color: ${(props) => props.theme.colors.text};
  line-height: 24px;

  @media (min-width: 340px) and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const HeaderButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bgCard};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
`;

export const HeaderImage = styled.img`
  @media (min-width: 340px) and (max-width: 768px) {
    width: 300px;
  }
`;

export const Main = styled.main`
  padding-top: 150px;
  padding-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white300};
`;

export const MainContainer = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 1200px;
  }

  @media (min-width: 340px) and (max-width: 768px) {
    width: 300px;
  }
`;

export const Card = styled.div`
  width: 340px;
  height: 430px;
  margin-bottom: 50px;
  box-shadow: 5px 25px 10px rgba(0, 0, 0, 0.1);
`;

export const CardHeader = styled.div`
  height: 55%;
  background-color: ${(props) => props.theme.colors.bgCard};
`;

export const CardBody = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.white};
`;

export const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 26px;
`;

export const CardSubtitle = styled.p`
  font-size: 18px;
  font-weight: normal;
  line-height: 30px;
  padding-bottom: 26px;
  color: ${(props) => props.theme.colors.text};
`;

export const Footer = styled.footer`
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bgSite};
`;

export const FooterContainer = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1336px) and (max-width: 1440px) {
    width: 1200px;
  }

  @media (min-width: 340px) and (max-width: 768px) {
    width: 300px;
  }
`;

export const FooterTitle = styled.h3`
  font-size: 32px;
  font-weight: normal;
  padding-bottom: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 470px;
  height: 65px;
  margin-bottom: 15px;
  border-radius: 4px;
  border: none;
  padding: 10px 15px;
  font-size: 18px;

  @media (min-width: 340px) and (max-width: 768px) {
    width: 300px;
  }
`;

export const InputTextArea = styled.textarea`
  padding: 20px 15px;
  width: 470px;
  height: 165px;
  margin-bottom: 30px;
  border-radius: 4px;
  border: none;
  font-size: 18px;

  @media (min-width: 340px) and (max-width: 768px) {
    width: 300px;
  }
`;

export const ButtonForm = styled.button`
  width: 470px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bgCard};
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  font-weight: normal;
  border: none;
  border-radius: 5px;

  @media (min-width: 340px) and (max-width: 768px) {
    width: 300px;
  }
`;
