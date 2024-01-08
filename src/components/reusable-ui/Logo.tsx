import styled, { css } from "styled-components";
import { theme } from "../../theme";

interface Props {
   $variant?: string;
}

export default function Logo({ $variant }: Props) {
   return (
      <LogoStyled $variant={$variant}>
         <h1>My ph</h1>
         <img src="/assets/logo2.png" alt="logo" />
         <h1>ne</h1>
      </LogoStyled>
   );
}

const LogoStyled = styled.div<Props>`
   display: flex;
   align-items: center;

   h1 {
      display: inline;
      text-align: center;
      font-size: ${theme.fonts.P4};
      line-height: 1em;
      font-weight: ${theme.weights.bold};
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-family: "Amatic SC", sans-serif;
      color: ${theme.colors.primary};
      text-shadow: 1px 1px white;
   }

   img {
      object-fit: contain;
      object-position: center;
      height: 60px;
      width: 50px;
      margin: 0 5px;
   }

   ${({ $variant }) => ($variant ? LogoStyle[$variant] : "")}
`;

const small = css``;
const normal = css`
   transform: scale(2.5);
`;

const LogoStyle: { [key: string]: ReturnType<typeof css> } = {
   small,
   normal,
};
