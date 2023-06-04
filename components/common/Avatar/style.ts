import styled from "styled-components";
import { palette } from "styles/palette";
import Image from "next/image";

export const Container = styled(Image)`
  width: 120px;
  height: 120px;
  border-radius: 100%;
  object-fit: cover;
  background-color: ${palette.pinkMain};
`;
