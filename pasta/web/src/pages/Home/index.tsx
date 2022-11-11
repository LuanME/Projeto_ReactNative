import {
  Container,
  Title,
  Button,
  Image,
  LeftContainer,
  RightContainer,
  SubTitle,
  ButtonBox,
} from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <LeftContainer>
        <Title>O mapa local com dados sobre a cidade-estado</Title>
        <SubTitle>Encontre o local e conte-nos o que achou!</SubTitle>

        <Link to="/new">
          <Button>
            <ButtonBox>{">"}</ButtonBox>
            Cadastro Status
          </Button>
        </Link>
      </LeftContainer>

      <RightContainer>
        <Image />
      </RightContainer>
    </Container>
  );
}
