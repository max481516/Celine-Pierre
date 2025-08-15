const BREAKPOINTS = {
  tabletMin: 550,
  largeTabletMin: 770,
  laptopMin: 1100,
  desktopMin: 1500,
};

const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  largeTabletAndUp: `(min-width: ${BREAKPOINTS.largeTabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

// Font Constants
const FONTS = {
  titleFont: `
    font-family: "TitleFont", cursive;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;

   
  `,
};

// Style Constants
const STYLES = {
  pageWrapper: `
padding: 1rem;

   @media ${QUERIES.tabletAndUp} {
      padding: 2rem;
    }

  @media ${QUERIES.largeTabletAndUp} {
    padding: 3rem;
  }

  @media ${QUERIES.laptopAndUp} {
    padding: 8rem 14rem;
    background-color: var(--color-lighter-sand);
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 8rem 20rem;
  }`,
  dresscodeWrapper: `
  background: var(--color-light-sand);
  border: 5px double var(--color-darker-sand);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 0.5rem auto 0;

  @media ${QUERIES.tabletAndUp} {
    width: 60%;
  }

  @media ${QUERIES.laptopAndUp} {
    background: HSL(21, 45%, 85%);
  }
`,
  frameContainer: `
@media ${QUERIES.laptopAndUp} {
    padding: 2rem;
    border: 3px double var(--color-darker-sand);
    box-shadow: 0 26px 58px 0 rgba(0, 0, 0, 0.22),
      0 5px 14px 0 rgba(0, 0, 0, 0.18);
    background-color: var(--color-light-sand);
    max-width: 85%;
    margin: 0 auto;
  }

  @media ${QUERIES.desktopAndUp} {
    padding: 4rem;
    max-width: 70%;
  }`,
};

export { BREAKPOINTS, QUERIES, FONTS, STYLES };
