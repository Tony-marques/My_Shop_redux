import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketFooter() {
   return (
      <BasketFooterStyled>
         <span>Codé avec ❤️ et React.JS</span>
      </BasketFooterStyled>
   );
}

const BasketFooterStyled = styled.div`
   background-color: green;
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 20px;
   font-family: "Amatic SC";
   color: ${theme.colors.white};
   background-color: ${theme.colors.primary};
   font-weight: 700;
`;
