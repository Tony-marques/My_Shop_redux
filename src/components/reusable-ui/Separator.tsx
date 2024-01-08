import styled, { css } from "styled-components";
import { theme } from "../../theme";

interface Props {
   $color?: string;
}

export default function Separator({ $color = "white" }: Props) {
   return <SeparatorStyled $color={$color} />;
}

const SeparatorStyled = styled.div<Props>`
   width: 100%;
   margin-bottom: 40px;

   ${({ $color }) => ($color ? separatorColor[$color] : "")}
`;

const white = css`
   border: 2px solid ${theme.colors.white};
`;

const separatorColor: { [key: string]: ReturnType<typeof css> } = {
   white,
};
