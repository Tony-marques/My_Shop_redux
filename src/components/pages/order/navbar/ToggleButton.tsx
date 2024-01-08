import styled from "styled-components";
import { theme } from "../../../../theme";

interface Props {
   onToggle: () => void;
   isChecked: boolean;
}

export default function ToggleButton({ onToggle, isChecked }: Props) {
   return (
      <ToggleButtonStyled>
         <input
            type="checkbox"
            name="toggle"
            id="toggle"
            checked={isChecked}
            onChange={onToggle}
         />
         <label htmlFor="toggle"></label>
      </ToggleButtonStyled>
   );
}

const ToggleButtonStyled = styled.div`
   input {
      display: none;
      transition: all 0.3s;

      & + label {
         display: flex;
         align-items: center;
         width: 200px;
         height: 40px;
         background-color: white;
         transition: all 0.3s ease;
         position: relative;
         font-size: 10px;
         border-radius: 30px;

         &:after {
            width: 150px;
            text-align: center;
            z-index: 2;
            text-transform: uppercase;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            text-overflow: ellipsis;
            overflow: hidden;
         }
      }
      & + label:before {
         content: "";
         border-radius: 50%;
         width: 30px;
         height: 30px;
         transition: all 500ms ease;
         position: absolute;
      }
      &:not(:checked) + label:before {
         background-color: ${theme.colors.secondary};
         left: 5px;
      }
      &:checked + label:before {
         background-color: ${theme.colors.primary};
         left: 165px;
      }
      & + label:after {
         position: absolute;
         /* opacity: 1; */
         transition: all 0.3s ease;
      }
      &:not(:checked) + label:after {
         content: "Activer le mode admin";
         right: 10px;
      }
      &:checked + label:after {
         content: "Désactiver le mode admin";
         left: 10px;
      }
   }

   input:checked + label {
      background-color: red;
      background-color: ${theme.colors.background_white};
      /* color: ${theme.colors.white}; */
   }
`;
