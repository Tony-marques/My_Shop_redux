import styled from "styled-components";
import Body from "./Body";
import Admin from "./Admin/Admin";
import { useAdminContext } from "../../../../context/AdminContext";
import Basket from "./Basket/Basket";

export default function Main() {
   const { isModeAdmin } = useAdminContext();

   return (
      <MainStyled>
         <Basket/>
         <div className="body-and-admin">
            <Body />
            {isModeAdmin && <Admin />}
         </div>
      </MainStyled>
   );
}

const MainStyled = styled.div`
   flex: 1;
   display: grid;
   grid-template-columns: 25% 1fr;
   overflow-y: hidden;
   position: relative;

   .body-and-admin {

      display: flex;
      flex-direction: column;
      position: relative;
      overflow-y: hidden;
   }

   .admin {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;

      .panels {
         height: 250px;
         background-color: #fff;
         border-top: 1px solid #e4e5e9;
      }
   }
`;
