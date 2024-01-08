import styled from "styled-components";
import { theme } from "../../../../theme";
import { usePhoneContext } from "../../../../context/PhoneContext";
import { useAdminContext } from "../../../../context/AdminContext";
import EmptyMessageAdmin from "./Admin/EmptyMessageAdmin";
import PhonesContainer from "./PhonesContainer";
import EmptyMessage from "./EmptyMessage";

export default function Body() {
   const { isModeAdmin } = useAdminContext();
   const { phones } = usePhoneContext();

   return (
      <BodyStyled>
         {phones.length > 0 && <PhonesContainer />}
         {isModeAdmin && phones.length === 0 && <EmptyMessageAdmin />}
         {!isModeAdmin && phones.length === 0 && <EmptyMessage />}
      </BodyStyled>
   );
}

const BodyStyled = styled.div`
   background-color: ${theme.colors.background_white};
   overflow-y: scroll;
   height: 100%;
   position: relative;
`;
