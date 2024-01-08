import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketBody() {
   return (
      <BasketBodyStyled>
         <span>Votre commande est vide.</span>
      </BasketBodyStyled>
   );
}

const BasketBodyStyled = styled.div`
   background-color: ${theme.colors.background_white};
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;

   span {
      color: ${theme.colors.greyBlue};
      font-family: "Amatic SC";
      font-size: 36px;
      font-weight: 400;
   }
`;
