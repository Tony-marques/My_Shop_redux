import styled from "styled-components";
import { theme } from "../../../../theme";

export default function EmptyMessage() {
   return (
      <EmptyMessageStyled>
         <h1>La liste est vide ?</h1>
         <h3>Cliquez ci-dessous pour la réinitialiser</h3>
         <p>À très vite !</p>
      </EmptyMessageStyled>
   );
}

const EmptyMessageStyled = styled.div`
   width: 100%;
   min-height: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-family: "Amatic SC";

   h1 {
      color: ${theme.colors.greyBlue};
      font-size: 36px;
      font-weight: 700;
   }

   h3 {
      font-size: 36px;
      font-weight: 400;
      color: ${theme.colors.greyBlue};
      margin-top: 21px;
      margin-bottom: 31px;
   }
   p {
      font-size: 36px;
      font-weight: 400;
      color: ${theme.colors.greyBlue};
   }
`;
