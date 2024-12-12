import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";
import { useTranslation } from "react-i18next";

export default function List() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <TempContainer>
        <Text>{t("List.Text")}</Text>
      </TempContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TempContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 300px;
  border-radius: 4px;
  border: 1px solid var(--color-primary-blue);
  background-color: var(--color-light-sand);
  box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
    0 5px 14px 0 rgba(0, 0, 0, 0.18);

  @media ${QUERIES.largeTabletAndUp} {
    height: 250px;
    width: 400px;
  }
`;

const Text = styled.p`
  ${FONTS.titleFont};
  font-size: 1.5rem;
  color: var(--color-primary-blue);

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2rem;
  }
`;
