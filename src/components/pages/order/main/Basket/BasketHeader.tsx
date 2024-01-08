import styled from "styled-components";
import { theme } from "../../../../../theme";

export default function BasketHeader() {
   return (
      <BasketHeaderStyled>
         <span>Total</span>
         <span>0.00 €</span>
      </BasketHeaderStyled>
   );
}

const BasketHeaderStyled = styled.div`
   background-color: ${theme.colors.primary};
   color: ${theme.colors.white};
   height: 70px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 16px;
   font-family: "Amatic SC";
   font-size: 36px;
`;
