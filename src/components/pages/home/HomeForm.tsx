import { ChangeEvent, FormEvent, useState } from "react";
import InputText from "../../reusable-ui/InputText";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../theme";
import Separator from "../../reusable-ui/Separator";
import { PiUserCircleFill } from "react-icons/pi";
import { IoChevronForward } from "react-icons/io5";
import Button from "../../reusable-ui/Button";

export default function HomeForm() {
   const [firstName, setFirstName] = useState<string>("");
   const navigate = useNavigate();

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
   };

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setFirstName(event.target.value);
   };

   const handleRedirect = () => {
      navigate(`/order/${firstName}`);
   };

   return (
      <HomeFormStyled onSubmit={handleSubmit} method="POST">
         <h1>Bienvenue chez nous !</h1>
         <Separator $color={"white"}/>
         <p>Connectez-vous</p>
         <InputText
            required
            value={firstName}
            name="firstName"
            placeholder={"Entrez votre prénom"}
            Icon={<PiUserCircleFill />}
            onChange={handleChange}
            $variant="normal"
         />
         <Button
            onClick={handleRedirect}
            label={"Accéder à mon espace"}
            Icon={<IoChevronForward />}
         />
      </HomeFormStyled>
   );
}

const HomeFormStyled = styled.form`
   padding: ${theme.spacing.lg};
   display: flex;
   flex-direction: column;
   align-items: center;

   h1 {
      font-family: "Amatic SC";
      margin-top: 39px;
      margin-bottom: 32px;
      font-size: 48px;
      color: ${theme.colors.primary};
      text-shadow: 1px 1px white;
   }

   p {
      font-family: "Amatic SC";
      font-size: 36px;
      color: ${theme.colors.primary};
      text-shadow: 1px 1px white;
   }
`;
