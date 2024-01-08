import HomeForm from "./HomeForm";
import Logo from "../../reusable-ui/Logo";
import styled from "styled-components";

export default function HomePage() {
   return (
      <HomePageStyled>
         <Logo $variant="normal" />
         <HomeForm />
      </HomePageStyled>
   );
}

const HomePageStyled = styled.div`
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   object-fit: contain;

   background: url("/assets/phones.jpg") rgba(0, 0, 0, 0.75);
   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   background-blend-mode: darken;
`;
