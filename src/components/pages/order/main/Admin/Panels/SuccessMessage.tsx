import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../theme";
import styled from "styled-components";

export default function SuccessMessage() {
   return (
      <SuccessMessageStyled>
         <FiCheck />
         Ajouté avec succès
      </SuccessMessageStyled>
   );
}

const SuccessMessageStyled = styled.p`
   height: 38px;
   display: flex;
   align-items: center;
   color: ${theme.colors.primary};
   svg {
      margin-left: 10px;
      margin-right: 5px;
      border: 1px solid ${theme.colors.primary};
      font-size: 18px;
      border-radius: 50%;
   }
`;
