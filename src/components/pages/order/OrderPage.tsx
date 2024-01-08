import { theme } from "../../../theme";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";
import Main from "./Main/Main";

export default function OrderPage() {
   return (
      <OrderPageStyled>
         <div className="container">
            <Navbar />
            <Main />
         </div>
      </OrderPageStyled>
   );
}

const OrderPageStyled = styled.div`
   background-color: ${theme.colors.background_dark};
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;

   .container {
      display: flex;
      flex-direction: column;
      width: 1400px;
      height: 95vh;
      background-color: red;
      border-radius: ${theme.borderRadius.extraRound};
      /* border: 1px solid ${theme.colors.primary}; */
      overflow: hidden;
      border: 3px solid ${theme.colors.primary};
   }
`;
