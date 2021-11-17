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
`;

export const HeaderContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const HeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: normal;
  width: 300px;
  margin-bottom: 20px;
`;

export const HeaderText = styled.p`
  width: 300px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: normal;
  line-height: 24px;
`;

export const HeaderButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: ${(props) => props.theme.colors.bgCard};
  border-radius: 8px;
  color: ${(props) => props.theme.colors.white};
  font-size: 18px;
`;

export const HeaderContainerImg = styled.div``;

export const HeaderImage = styled.img``;

export const Main = styled.main``;

export const Footer = styled.footer``;
