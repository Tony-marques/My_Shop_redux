import styled from "styled-components";
import { theme } from "../../../../theme";
import { Link, useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";

export default function NavbarRight() {
   const { firstName } = useParams();

   return (
      <NavbarRightStyled>
         <div className="informations">
            <p>
               Hey, <span>{firstName}</span>
            </p>
            <Link to="/">Se déconnecter</Link>
         </div>
         <div className="profile">
            <BsPersonCircle />
         </div>
      </NavbarRightStyled>
   );
}

const NavbarRightStyled = styled.div`
   margin-right: 50px;
   color: ${theme.colors.white};
   display: flex;
   align-items: center;
   text-align: right;
   gap: 10px;

   .informations {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      span {
         /* color: ${theme.colors.greyDark}; */
      }
      a {
         color: white;
         font-size: 10px;

         &:hover {
            text-decoration: underline;
         }
      }
   }

   .profile {
      display: flex;
      align-items: center;
      svg {
         font-size: 36px;
      }
   }
`;
