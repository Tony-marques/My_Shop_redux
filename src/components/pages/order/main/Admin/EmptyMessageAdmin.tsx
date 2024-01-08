import styled from "styled-components";
import Button from "../../../../reusable-ui/Button";
import { theme } from "../../../../../theme";
import { usePhoneContext } from "../../../../../context/PhoneContext";

export default function EmptyMessageAdmin() {
   const { regeneratePhones } = usePhoneContext();

   const handleRegeneratePhones = () => {
      regeneratePhones();
   };

   return (
      <EmptyMessageAdminStyled>
         <h1>La liste est vide ?</h1>
         <h3>Cliquez ci-dessous pour la réinitialiser</h3>
         <Button
            label="Générer de nouveaux téléphones"
            $variant="small"
            onClick={handleRegeneratePhones}
         />
      </EmptyMessageAdminStyled>
   );
}

const EmptyMessageAdminStyled = styled.div`
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
`;
