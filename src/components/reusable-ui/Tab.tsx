import { ReactElement } from "react";
import styled from "styled-components";
import { theme } from "../../theme";

interface Props {
   Icon?: ReactElement;
   label?: string;
   onClick?: () => void;
   className?: string;
}
export default function Tab({ Icon, label, onClick, className }: Props) {
   return (
      <TabStyled onClick={onClick} className={className}>
         {Icon && Icon}
         {label && <p>{label}</p>}
      </TabStyled>
   );
}

const TabStyled = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 22px;
   gap: 13px;
   font-weight: 400;
   font-size: 12px;
   color: ${theme.colors.greySemiDark};
   background-color: ${theme.colors.white};
   cursor: pointer;
   border-top-right-radius: ${theme.borderRadius.round};
   border-top-left-radius: ${theme.borderRadius.round};
   border-bottom: 1px solid ${theme.colors.background_white};
   box-shadow: 0 -6px 8px -2px rgba(0, 0, 0, 0.1);
`;
