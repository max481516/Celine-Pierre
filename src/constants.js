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
  dresscodeWrapper: `
 background: var(--color-light-sand);
  border-radius: 4px;
  border: 1px solid var(--color-dark-sand);
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 0.5rem auto 0;
`,
};

export { BREAKPOINTS, QUERIES, FONTS, STYLES };
