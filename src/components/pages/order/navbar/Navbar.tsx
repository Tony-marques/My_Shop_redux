import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import { theme } from "../../../../theme";
import NavbarRight from "./NavbarRight";
import ToggleButton from "./ToggleButton";
import { useAdminContext } from "../../../../context/AdminContext";

export default function Navbar() {
   const { isModeAdmin, toggleAdminMode } = useAdminContext();

   const handleChange = () => {
      toggleAdminMode();
   };

   return (
      <NavbarStyled>
         <Logo $variant="small" />
         <div className="navbar-right">
            <ToggleButton
               onToggle={() => handleChange()}
               isChecked={isModeAdmin}
            />
            <NavbarRight />
         </div>
      </NavbarStyled>
   );
}

const NavbarStyled = styled.div`
   background-color: ${theme.colors.primary};
   height: 98px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0 20px;

   .navbar-right {
      display: flex;
      gap: 60px;
      align-items: center;
   }
`;
