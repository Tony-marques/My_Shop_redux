import styled, { css } from "styled-components";
import { theme } from "../../theme";
import { ReactElement } from "react";

interface Props {
   Icon?: ReactElement;
   label?: string;
   onClick?: () => void;
   $variant?: string;
   className?: string;
}

export default function Button({
   label,
   Icon,
   onClick,
   $variant = "normal",
   className,
}: Props) {
   return (
      <ButtonStyled onClick={onClick} $variant={$variant} className={className}>
         <span>{label}</span>
         {Icon && Icon}
      </ButtonStyled>
   );
}

const ButtonStyled = styled.button<Props>`
   width: 100%;
   border-radius: 5px;
   border: 1px solid ${theme.colors.primary};
   cursor: pointer;
   background-color: ${theme.colors.primary};
   color: ${theme.colors.white};
   font-size: 15px;
   display: flex;
   align-items: center;
   justify-content: center;
   font-family: Arial;
   font-weight: 700;
   transition: ease-out 0.4s;

   &:hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
   }

   ${({ $variant }) => ($variant ? sizeStyle[$variant] : "")}
`;

const small = css`
   padding: 12px 26px;
   font-size: 11px;
   width: max-content;
`;
const normal = css`
   padding: 18px 24px 18px 24px;
`;

const sizeStyle: { [key: string]: ReturnType<typeof css> } = {
   small,
   normal,
};
