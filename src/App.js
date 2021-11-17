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
  HeaderImage,
  Main,
  Footer,
  MainHeaderContainer,
  MainContainer,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  FooterContainer,
  FooterTitle,
  Form,
  Input,
  InputTextArea,
  ButtonForm,
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
            <HeaderImage src={LogoImage} />
          </MainHeaderContainer>
        </Header>
        <Main>
          <MainContainer>
            <Card>
              <CardHeader />
              <CardBody>
                <CardTitle>Título do card</CardTitle>
                <CardSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card>
              <CardHeader />
              <CardBody>
                <CardTitle>Título do card</CardTitle>
                <CardSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card>
              <CardHeader />
              <CardBody>
                <CardTitle>Título do card</CardTitle>
                <CardSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card>
              <CardHeader />
              <CardBody>
                <CardTitle>Título do card</CardTitle>
                <CardSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card>
              <CardHeader />
              <CardBody>
                <CardTitle>Título do card</CardTitle>
                <CardSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                </CardSubtitle>
              </CardBody>
            </Card>
            <Card>
              <CardHeader />
              <CardBody>
                <CardTitle>Título do card</CardTitle>
                <CardSubtitle>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in neque et nisl.
                </CardSubtitle>
              </CardBody>
            </Card>
          </MainContainer>
        </Main>
        <Footer>
          <FooterContainer>
            <FooterTitle>Entre em contato</FooterTitle>
            <Form>
              <Input placeholder="Nome" />
              <Input placeholder="E-mail" />
              <Input placeholder="Telefone" />
              <InputTextArea placeholder="Mensagem..." />
            </Form>
            <ButtonForm>Enviar mensagem</ButtonForm>
          </FooterContainer>
        </Footer>
      </Container>
    </Theme>
  );
}
