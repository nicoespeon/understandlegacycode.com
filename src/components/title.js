import styled from "styled-components"

import { colors } from "../utils/typography"

const Title = styled.h1`
  font-weight: 300;
  letter-spacing: -0.03em;
  font-size: 2.5rem;

  @media (min-width: 600px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1100px) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: -3em;
      width: calc(100% + 3em);
      height: 0.3em;
      bottom: 0;
      background: ${colors.background};
    }
  }
`

export default Title
