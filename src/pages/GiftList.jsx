import styled from "styled-components";
import { FONTS, QUERIES } from "../constants";
import { useTranslation } from "react-i18next";

export default function List() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Text>
        {t("List.Text")}
        <Link
          href="https://www.millemercismariage.com/celinepierre2025/liste.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("List.Link")}
        </Link>{" "}
        {t("List.ContinuedText")}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  @media ${QUERIES.largeTabletAndUp} {
    margin-top: -105px;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 0 8rem;
  }

  @media (max-width: 358px) {
    margin-top: -50px;
  }
`;

const Text = styled.p`
  ${FONTS.titleFont};
  font-size: 1.5rem;
  color: var(--color-sandstone);
  text-align: center;
  white-space: pre-line;

  @media ${QUERIES.largeTabletAndUp} {
    font-size: 2rem;
  }

  @media (max-width: 358px) {
    font-size: 1.2rem;
  }
`;

const Link = styled.a`
  color: var(--color-primary-blue);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-light-blue);
  }
`;
