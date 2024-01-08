import styled from "styled-components";
import InputText from "../../../../../reusable-ui/InputText";
import { IoMdPhonePortrait } from "react-icons/io";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import Button from "../../../../../reusable-ui/Button";
import { ChangeEvent, FormEvent, useState } from "react";
import { Phone } from "../../../../../../interfaces/phone.interface";
import { usePhoneContext } from "../../../../../../context/PhoneContext";
import SuccessMessage from "./SuccessMessage";
import ImagePreview from "./ImagePreview";

const EMPTY_PHONE = {
   title: "",
   imageSource: "",
   price: "",
   id: "",
};

export default function AddPhoneForm() {
   const [inputs, setInputs] = useState<Phone>(EMPTY_PHONE);
   const [isSuccessMessage, setIsSuccessMessage] = useState<boolean>(false);
   const { handleAddPhone } = usePhoneContext();

   const inputsConfig = [
      {
         name: "title",
         placeholder: "Nom du produit (ex: Super Burger)",
         Icon: <IoMdPhonePortrait />,
         $variant: "small",
         className: "full-width",
         value: inputs.title,
      },
      {
         name: "imageSource",
         placeholder:
            "Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)",
         Icon: <BsFillCameraFill />,
         $variant: "small",
         className: "full-width",
         value: inputs.imageSource,
      },
      {
         name: "price",
         placeholder: "Prix",
         Icon: <MdOutlineEuro />,
         $variant: "small",
         className: "full-width",
         value: inputs.price,
      },
   ];

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      const newPhone = {
         ...inputs,
         [name]: value,
      };
      setInputs(newPhone);
   };

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      handleAddPhone(inputs);
      setInputs(EMPTY_PHONE);
      setIsSuccessMessage(true);
   };

   return (
      <AddPhoneFormStyled onSubmit={handleSubmit}>
         <ImagePreview image={inputs.imageSource} />
         <div className="form">
            {inputsConfig.map(
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
         <div className="buttons">
            <Button $variant="small" label="Ajouter un nouveau téléphone" />
            {isSuccessMessage && <SuccessMessage />}
         </div>
      </AddPhoneFormStyled>
   );
}

const AddPhoneFormStyled = styled.form`
   /* background-color: blue; */
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

   .buttons {
      display: flex;
      align-items: start;
      grid-area: 2 / 2 / 3 / 3;
      gap: 5px;
   }
`;
