import styled from "styled-components";
import { theme } from "../../../../../../theme";

interface Props {
   image: string;
}

export default function ImagePreview({ image }: Props) {
   return (
      <ImagePreviewStyled>
         {image && <img src={image} />}
         {!image && <p>Aucune image</p>}
      </ImagePreviewStyled>
   );
}

const ImagePreviewStyled = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   grid-area: 1 / 1 / 2 / 2;

   p {
      border: 1px solid ${theme.colors.secondary};
      width: 215px;
      height: 120px;
      border-radius: ${theme.borderRadius.round};
      display: flex;
      align-items: center;
      justify-content: center;
   }

   img {
      width: 100%;
      height: 100%;
      object-fit: contain;
   }
`;
