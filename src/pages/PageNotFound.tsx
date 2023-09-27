import styled, { StyleSheetManager } from "styled-components";

import { useMoveBack } from "../hooks/useMoveBack";
import Button from "../components/ui/Button";
import Heading from "../components/ui/Heading";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          صفحه‌ای که دنبال آن بودید، متاسفانه یافت نشد! 😢
        </Heading>

        <StyleSheetManager shouldForwardProp={(prop) => prop !== "variation"}>
          <Button onClick={moveBack} size="large" variation="primary">
            برگشت به صفحه‌ی قبل &rarr;
          </Button>
        </StyleSheetManager>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
