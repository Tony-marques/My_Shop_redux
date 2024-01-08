import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";
import { IoMdPhonePortrait } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { ChangeEvent } from "react";

import { usePhoneContext } from "../../../../../../context/PhoneContext";
import ImagePreview from "./ImagePreview";
import { theme } from "../../../../../../theme";

export default function EditPhoneForm() {
   const { handleEditPhone, isSelectedPhone, phoneSelected, setPhoneSelected } =
      usePhoneContext();

   const inputsConfig = [
      {
         name: "title",
         placeholder: "Nom du produit (ex: Super Burger)",
         Icon: <IoMdPhonePortrait />,
         $variant: "small",
         className: "full-width",
         value: phoneSelected.title,
      },
      {
         name: "imageSource",
         placeholder:
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
         Icon: <BsFillCameraFill />,
         $variant: "small",
         className: "full-width",
         value: phoneSelected.imageSource,
      },
      {
         name: "price",
         placeholder: "Prix",
         Icon: <MdOutlineEuro />,
         $variant: "small",
         className: "full-width",
         value: phoneSelected.price,
      },
   ];

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const newPhone = {
         ...phoneSelected,
         [name]: value,
      };
      console.log(newPhone);
      // Update data in form
      setPhoneSelected(newPhone);
      // setInputs(newPhone);
      handleEditPhone(newPhone);
   };

   return (
      <EditPhoneFormStyled>
         {isSelectedPhone && <ImagePreview image={phoneSelected.imageSource} />}
         <div className="form">
            {isSelectedPhone &&
               inputsConfig.map(
                  ({ placeholder, Icon, $variant, className, name, value }) => {
                     return (
                        <InputText
                           placeholder={placeholder}
                           Icon={Icon}
                           $variant={$variant}
                           className={className}
                           onChange={handleChange}
                           name={name}
                           value={value}
                           key={name}
                        />
                     );
                  }
               )}
         </div>
         {isSelectedPhone && (
            <div className="message">
               <p>
                  Cliquer sur un téléphone pour le modifier{" "}
                  <span>en temps réel</span>
               </p>
            </div>
         )}
      </EditPhoneFormStyled>
   );
}

const EditPhoneFormStyled = styled.form`
   display: grid;
   grid-template-columns: 30% 1fr;
   grid-template-rows: 70% 1fr;
   height: 100%;
   width: 80%;
   padding: 25px 30px 20px 60px;
   grid-column-gap: 8px;

   .full-width {
      width: 100%;
   }

   .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      grid-area: 1 / 2 / 2 / 3;
   }

   .message {
      display: flex;
      align-items: start;
      grid-area: 2 / 2 / 3 / 3;
      gap: 5px;

      p {
         font-size: 15px;
         font-weight: 400;
         color: ${theme.colors.primary};

         span {
            text-decoration: underline;
         }
      }
   }
`;
