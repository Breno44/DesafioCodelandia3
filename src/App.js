import React from "react";
import LogoImage from "./assets/img/image.svg";
import { Theme } from "./theme/Theme";
import {
  Container,
  Header,
  HeaderContainer,
  HeaderTitle,
  HeaderText,
  HeaderButton,
  HeaderContainerImg,
  HeaderImage,
  Main,
  Footer,
  MainHeaderContainer,
} from "./AppStyle";

export function App() {
  return (
    <Theme>
      <Container>
        <Header>
          <MainHeaderContainer>
            <HeaderContainer>
              <HeaderTitle>Lorem ipsum dolor sit amet</HeaderTitle>
              <HeaderText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu massa sit amet augue consectetur
                ullamcorper non ac massa.
              </HeaderText>
              <HeaderButton>Botão</HeaderButton>
            </HeaderContainer>
            <HeaderContainerImg>
              <HeaderImage src={LogoImage} />
            </HeaderContainerImg>
          </MainHeaderContainer>
        </Header>
        <Main></Main>
        <Footer></Footer>
      </Container>
    </Theme>
  );
}
