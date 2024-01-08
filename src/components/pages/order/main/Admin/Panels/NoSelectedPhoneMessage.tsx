import styled from "styled-components";
import { HiCursorClick } from "react-icons/hi";
import { theme } from "../../../../../../theme";

export default function NoSelectedPhoneMessage() {
   return (
      <NoSelectedPhoneMessageStyled>
         <span>Cliquer sur un produit pour le modifier</span>
         <HiCursorClick />
      </NoSelectedPhoneMessageStyled>
   );
}

const NoSelectedPhoneMessageStyled = styled.div`
   /* background-color: pink; */
   height: 100%;
   display: flex;
   gap: 9px;
   margin-top: 81px;
   margin-left: 71px;
   font-family: Amatic SC;
   font-size: 24px;
   font-weight: 400;
   color: ${theme.colors.greyBlue};
`;
