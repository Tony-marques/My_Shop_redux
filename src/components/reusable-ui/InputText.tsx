import { ChangeEvent, ReactElement } from "react";
import styled, { css } from "styled-components";
import { theme } from "../../theme";

interface Props {
   onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
   required?: boolean;
   value?: string | number;
   name?: string;
   placeholder?: string;
   Icon?: ReactElement;
   className?: string;
   $variant?: string;
}

export default function InputText({
   onChange,
   Icon,
   $variant = "normal",
   className,
   ...othersProps
}: Props) {
   return (
      <InputTextStyled $variant={$variant} className={className}>
         {Icon && Icon}
         <input type="text" onChange={onChange} {...othersProps} />
      </InputTextStyled>
   );
}

const InputTextStyled = styled.div<Props>`
   border-radius: 5px;
   /* height: 55px; */
   background-color: ${theme.colors.white};
   width: 400px;
   display: flex;
   align-items: center;
   gap: 13px;
   margin: 18px 0;

   svg {
      font-size: 25px;
      color: ${theme.colors.primary};
   }

   input {
      flex: 1;
      border: none;
      padding: 10px;

      &::placeholder {
         color: #d3d3d3;
      }
   }
   ${({ $variant }) => ($variant ? sizeStyle[$variant] : "")}
`;

const small = css`
   padding: 9px 24px;
   margin: 0;
   height: 35px;
   background-color: ${theme.colors.background_white};

   input {
      padding: 5px;
      background-color: ${theme.colors.background_white};

      &::placeholder {
         color: ${theme.colors.greyMedium};
      }
   }
`;
const normal = css`
   padding: 18px 24px;
   height: 55px;

   input {
      padding: 10px;
   }
`;
const sizeStyle: { [key: string]: ReturnType<typeof css> } = {
   small,
   normal,
};
